# Workflows

## deploy.yml — Deploy to GitHub Pages

Trigger: `portfolio@*` tag push or manual `workflow_dispatch`

Jobs (in order):
1. `security-scan` — runs Trivy filesystem scan, uploads SARIF to GitHub Security tab
2. `build` — installs deps, builds `rnd-ui` then `portfolio`, uploads `apps/portfolio/out` as Pages artifact
3. `deploy` — deploys the artifact to GitHub Pages

Secrets required: `NEXT_PUBLIC_SITE_URL`

```bash
git tag portfolio@0.0.3
git push origin portfolio@0.0.3
```

---

## pr-check.yml — PR Quality Check

Trigger: pull request targeting `main` or `master`

Jobs (parallel):
- `lint` — runs `npm run lint` across all workspaces
- `build` — builds `rnd-ui` + `portfolio`, verifies `apps/portfolio/out` exists

---

## publish-rnd-ui.yml — Publish rnd-ui to npm

Trigger: `rnd-ui@*` tag push

Jobs:
1. Installs deps, builds `rnd-ui`
2. Publishes to npm with `--access public`

Secrets required: `NPM_TOKEN`

```bash
git tag rnd-ui@0.1.0
git push origin rnd-ui@0.1.0
```
