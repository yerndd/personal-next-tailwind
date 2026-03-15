# GitHub Pages + Cloudflare Setup

Deploys the portfolio to GitHub Pages (free) with Cloudflare for custom domain, SSL, and CDN. Only cost is domain registration (~$10–15/year).

---

## 1. Enable GitHub Pages

In your repo: Settings → Pages → Build and deployment → Source: **GitHub Actions**

---

## 2. Deploy

Deployments trigger automatically on a `portfolio@*` tag push:

```bash
git tag portfolio@0.0.3
git push origin portfolio@0.0.3
```

Or trigger manually from the Actions tab via `workflow_dispatch`.

---

## 3. Add Domain to Cloudflare

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → Add a site → enter your domain → Free plan
2. Update your registrar's nameservers to the two Cloudflare values shown
3. Wait 5–60 min for propagation

---

## 4. Add DNS Records in Cloudflare

| Type | Name | Target | Proxy |
|------|------|--------|-------|
| CNAME | @ | `YOUR_USERNAME.github.io` | ON |
| CNAME | www | `YOUR_USERNAME.github.io` | ON |

---

## 5. Configure Custom Domain on GitHub Pages

Settings → Pages → Custom domain → enter your domain → Save → check **Enforce HTTPS**

The `public/CNAME` file is already committed — no extra step needed.

---

## 6. Cloudflare SSL

SSL/TLS → Overview → Encryption mode: **Full**

SSL/TLS → Edge Certificates → enable:
- Always Use HTTPS
- Automatic HTTPS Rewrites

---

## 7. Optional: Cloudflare Optimizations

Speed → Optimization: enable Auto Minify (HTML, CSS, JS) and Brotli

Caching → Configuration: Caching Level Standard, Browser Cache TTL 4 hours

---

## Troubleshooting

- Site not loading — wait for DNS propagation, verify nameservers at registrar, confirm `public/CNAME` exists
- SSL errors — set Cloudflare SSL to Full, wait up to 24h for GitHub Pages to provision SSL
- 404 errors — confirm Pages source is GitHub Actions, check the workflow ran successfully, verify `apps/portfolio/out` was produced

---

## GitHub Actions Secrets Required

| Secret | Used by |
|--------|---------|
| `NPM_TOKEN` | `publish-rnd-ui.yml` — publishes `rnd-ui` to npm |
| `NEXT_PUBLIC_SITE_URL` | `deploy.yml` — sets the site URL at build time |
