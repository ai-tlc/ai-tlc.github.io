# UvA AI Chat Manual

This repository hosts the user manual for UvA AI Chat. The manual is available in English and Dutch.

**Live site:** [ai-tlc.github.io](https://ai-tlc.github.io)

## Editing Content

Content can be edited in two ways:

1. **Via the CMS** at [ai-tlc.github.io/admin/](https://ai-tlc.github.io/admin/) (requires GitHub access)
2. **Directly** by editing markdown files in `docs/` or `i18n/nl/`

>**📖 Need help editing?**  
> For a full, step-by-step walkthrough, check out the  
> **[CMS Editing Guide (Wiki)](https://github.com/ai-tlc/ai-tlc.github.io/wiki)**

When updating content, remember to keep both English and Dutch versions in sync.

## About

The manual covers:

- Getting started with UvA AI Chat
- Core features and how to use them
- Personalization and collaboration options
- Advanced usage patterns
- Frequently asked questions
- Glossary of terms

## Technical Overview

The site is built with:

- **Docusaurus** for static site generation
- **Decap CMS** for content editing via a web interface
- **GitHub Pages** for hosting
- **Cloudflare Worker** for CMS authentication

Content is stored as markdown files in the `docs/` folder (English) and `i18n/nl/` (Dutch translations).

## Deployment

Deployment is automatic. Push changes to the `main` branch and GitHub Actions will build and deploy the site within a few minutes.

## License

See [LICENSE](LICENSE) for details.
