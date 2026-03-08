# Security Policy

## Supported Versions

This project is a personal portfolio website. Security updates are applied to the latest version only.

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| Older   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly.

### How to Report

1. **Do NOT** open a public issue
2. Email: [rindo.ananta@gmail.com] (replace with your email)
3. Or use GitHub's private vulnerability reporting:
   - Go to the Security tab
   - Click "Report a vulnerability"

### What to Include

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### Response Time

- **Initial response**: Within 48 hours
- **Status update**: Within 7 days
- **Fix timeline**: Depends on severity

## Security Measures

This project implements the following security practices:

### Code Security
- ESLint for code quality and security checks
- No sensitive data in repository
- Dependencies regularly updated
- Automated security scanning via GitHub Actions

### Deployment Security
- Static site generation (no server-side vulnerabilities)
- HTTPS enforced via Cloudflare/GitHub Pages
- Content Security Policy headers
- No user data collection or storage

### Dependencies
- Regular dependency audits via `npm audit`
- Automated dependency updates
- Minimal dependencies to reduce attack surface

## Known Limitations

As a static website:
- No backend vulnerabilities
- No database security concerns
- No user authentication required
- Limited attack surface

## Security Best Practices for Contributors

If you contribute to this project:

1. **Never commit**:
   - API keys or secrets
   - Personal information
   - Credentials or tokens

2. **Always**:
   - Run `npm audit` before submitting PRs
   - Keep dependencies up to date
   - Follow secure coding practices
   - Test changes locally first

3. **Code Review**:
   - All PRs require review
   - Security-sensitive changes need extra scrutiny

## Disclosure Policy

- Security issues are fixed privately
- Public disclosure after fix is deployed
- Credit given to reporters (if desired)

## Contact

For security concerns, contact:
- Email: [rindo.ananta@gmail.com]
- GitHub: [@yerndd](https://github.com/yerndd)

---

**Last Updated**: March 2026
