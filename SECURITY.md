# Security Policy

## Scope

This policy covers both packages in this monorepo:

- `rnd-ui` — published npm component library (`packages/rnd-ui`)
- `portfolio` — personal portfolio site (`apps/portfolio`)

## Supported Versions

Security updates are applied to the latest version only. No legacy versions are maintained.

## Reporting a Vulnerability

Please report responsibly. Do not open a public issue.

- Email: rindo.ananta@gmail.com
- GitHub: [Private vulnerability reporting](../../security/advisories/new)

Include a description, steps to reproduce, potential impact, and a suggested fix if you have one.

Response times: initial reply within 48 hours, status update within 7 days. Fix timeline depends on severity.

## Security Measures

- Static site export — no server, no database, minimal attack surface
- HTTPS enforced via GitHub Pages
- No user data collected or stored
- ESLint + Trivy scanning on every push via GitHub Actions
- Secrets managed via GitHub Actions secrets — never committed to the repo
- Regular `npm audit` and dependency updates

## For Contributors

Never commit API keys, tokens, credentials, or personal information. Run `npm audit` before opening a PR and keep dependencies up to date.

## Disclosure

Issues are fixed privately. Public disclosure happens after the fix is deployed. Reporter credit given on request.

---

Last updated: March 2026
