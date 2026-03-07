# GitHub Actions Setup Guide

## Prerequisites

1. **GCP Project**: personal-app-489521
2. **GKE Cluster**: Create using the script below
3. **Service Account**: Will be created in Step 1

## Step 0: Create GKE Cluster (if not exists)

```powershell
.\scripts\create-gke-cluster.ps1
```

This will create:
- Cluster name: `rnd-app-cluster`
- Zone: `asia-southeast1-a`
- Machine type: `e2-micro` (free tier eligible)
- Cost: ~$7/month

## Step 1: Create GCP Service Account

```bash
# Set your project ID
export PROJECT_ID="personal-app-489521"

# Create service account
gcloud iam service-accounts create github-actions \
  --display-name="GitHub Actions" \
  --project=$PROJECT_ID

# Grant required roles
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:github-actions@${PROJECT_ID}.iam.gserviceaccount.com" \
  --role="roles/container.developer"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:github-actions@${PROJECT_ID}.iam.gserviceaccount.com" \
  --role="roles/storage.admin"

# Create and download key
gcloud iam service-accounts keys create key.json \
  --iam-account=github-actions@${PROJECT_ID}.iam.gserviceaccount.com
```

## Step 2: Add GitHub Secrets

Go to your repository → Settings → Secrets and variables → Actions

Add these secrets:

1. **GCP_PROJECT_ID**: Your GCP project ID
2. **GCP_SA_KEY**: Contents of `key.json` file (entire JSON)

## Step 3: Update Workflow Variables

Edit `.github/workflows/build-and-deploy.yml` and update:

```yaml
env:
  PROJECT_ID: ${{ secrets.GCP_PROJECT_ID }}
  GKE_CLUSTER: rnd-app-cluster        # Your cluster name
  GKE_ZONE: asia-southeast1-a          # Your cluster zone
  DEPLOYMENT_NAME: rnd-app             # Your deployment name
  IMAGE_NAME: rnd-app                  # Your image name
```

## Step 4: Update Kubernetes Deployment

Update `kubernetes/deployment.yaml` to use GCR image:

```yaml
spec:
  containers:
  - name: web
    image: gcr.io/YOUR_PROJECT_ID/rnd-app:latest
```

## Workflows Overview

### 1. Build and Deploy (`build-and-deploy.yml`)
- **Triggers**: Push to main/master, PR, manual
- **Jobs**:
  - Build Docker image with caching
  - Security scan with Trivy
  - Upload results to GitHub Security
  - Deploy to GKE (only on push to main)

### 2. PR Quality Check (`pr-check.yml`)
- **Triggers**: Pull requests
- **Jobs**:
  - ESLint code quality check
  - Next.js build test
  - Docker build test
  - Security scan

### 3. Cleanup Old Images (`cleanup.yml`)
- **Triggers**: Weekly (Sunday 2 AM), manual
- **Jobs**:
  - Delete old GCR images (keeps last 5)
  - Saves storage costs

## Optimizations Included

1. **Docker layer caching** - Faster builds
2. **Parallel jobs** - Build and scan run together
3. **Conditional deployment** - Only deploys on main branch
4. **Security scanning** - Trivy integration with GitHub Security
5. **Automatic cleanup** - Removes old images weekly
6. **Build verification** - Tests before deployment

## Manual Deployment

Trigger manual deployment:
1. Go to Actions tab
2. Select "Build and Deploy to GKE"
3. Click "Run workflow"
4. Select branch and run

## Monitoring

View deployment status:
- **Actions tab**: See workflow runs
- **Security tab**: View vulnerability reports
- **GKE Console**: Monitor cluster health

## Troubleshooting

### Authentication Failed
- Verify `GCP_SA_KEY` secret is correct JSON
- Check service account has required roles

### Build Failed
- Check Docker build locally first
- Review build logs in Actions tab

### Deployment Failed
- Verify GKE cluster is running
- Check kubectl commands work locally
- Review deployment logs

## Cost Optimization

- Workflows use GitHub-hosted runners (free for public repos)
- Docker layer caching reduces build time
- Weekly cleanup reduces GCR storage costs
- e2-micro node keeps GKE costs minimal (~$7/month)
