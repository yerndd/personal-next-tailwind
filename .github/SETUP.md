# GitHub Pages + Cloudflare Setup Guide

## Overview

This setup deploys your Next.js site to GitHub Pages (free) and uses Cloudflare (free) for:
- Custom domain (rnd-app.com)
- SSL/HTTPS
- CDN (faster loading worldwide)
- DDoS protection

**Total Cost: $0/month** (only domain registration ~$10-15/year)

---

## Step 1: Enable GitHub Pages

1. Go to your repository settings:
   ```
   https://github.com/YOUR_USERNAME/personal-next-tailwind/settings/pages
   ```

2. Under "Build and deployment":
   - Source: **GitHub Actions**

3. Save changes

---

## Step 2: Deploy Your Site

Push to main/master branch or manually trigger:

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

Your site will be available at:
```
https://YOUR_USERNAME.github.io/personal-next-tailwind/
```

---

## Step 3: Setup Cloudflare

### 3.1 Add Your Domain to Cloudflare

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click "Add a site"
3. Enter: `rnd-app.com`
4. Select **Free plan**
5. Click "Continue"

### 3.2 Update Nameservers

Cloudflare will show you 2 nameservers like:
```
ns1.cloudflare.com
ns2.cloudflare.com
```

Go to your domain registrar and update nameservers to these values.

**Wait 5-60 minutes** for DNS propagation.

### 3.3 Add DNS Records

In Cloudflare DNS settings, add these records:

**For root domain (rnd-app.com):**
```
Type: CNAME
Name: @
Target: YOUR_USERNAME.github.io
Proxy: ON (orange cloud)
```

**For www subdomain:**
```
Type: CNAME
Name: www
Target: YOUR_USERNAME.github.io
Proxy: ON (orange cloud)
```

---

## Step 4: Configure GitHub Pages Custom Domain

1. Go back to GitHub Pages settings
2. Under "Custom domain", enter: `rnd-app.com`
3. Check "Enforce HTTPS" (wait a few minutes if not available yet)
4. Save

---

## Step 5: Create CNAME File

Create a file in your repository root:

**File: `public/CNAME`**
```
rnd-app.com
```

Commit and push:
```bash
git add public/CNAME
git commit -m "Add custom domain"
git push origin main
```

---

## Step 6: Cloudflare SSL Settings

1. In Cloudflare, go to **SSL/TLS** → **Overview**
2. Set encryption mode to: **Full**
3. Go to **SSL/TLS** → **Edge Certificates**
4. Enable:
   - Always Use HTTPS: **ON**
   - Automatic HTTPS Rewrites: **ON**

---

## Step 7: Optimize Cloudflare (Optional)

### Speed Settings
Go to **Speed** → **Optimization**:
- Auto Minify: Enable HTML, CSS, JS
- Brotli: ON

### Caching
Go to **Caching** → **Configuration**:
- Caching Level: Standard
- Browser Cache TTL: 4 hours

---

## Verification

After setup (wait 5-10 minutes), visit:
- https://rnd-app.com
- https://www.rnd-app.com

Both should show your site with:
- ✓ HTTPS/SSL (padlock icon)
- ✓ Fast loading (Cloudflare CDN)
- ✓ Custom domain

---

## Troubleshooting

### Site not loading
- Wait 5-60 minutes for DNS propagation
- Check nameservers are updated at your registrar
- Verify CNAME file exists in `public/CNAME`

### SSL errors
- Set Cloudflare SSL mode to "Full"
- Wait for GitHub Pages to provision SSL (can take 24 hours)
- Ensure "Enforce HTTPS" is checked in GitHub Pages settings

### 404 errors
- Verify GitHub Pages is set to "GitHub Actions" source
- Check workflow ran successfully in Actions tab
- Ensure `out` directory was created in build

---

## Updating Your Site

Just push to main/master:
```bash
git add .
git commit -m "Update site"
git push origin main
```

GitHub Actions will automatically:
1. Build your Next.js site
2. Deploy to GitHub Pages
3. Cloudflare will cache and serve it globally

---

## Monitoring

- **GitHub Actions**: Check deployment status in Actions tab
- **Cloudflare Analytics**: View traffic, bandwidth, threats blocked
- **GitHub Pages**: See deployment history in repository settings

---

## Cost Breakdown

| Service | Cost |
|---------|------|
| GitHub Pages | FREE |
| Cloudflare | FREE |
| SSL Certificate | FREE |
| CDN | FREE |
| Bandwidth | FREE (unlimited) |
| Domain (rnd-app.com) | ~$10-15/year |

**Total: $0/month** 🎉
