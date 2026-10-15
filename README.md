# Amazing Web Services

Static company website built with Next.js, React, Tailwind CSS, Framer Motion, and Lucide icons.

## Run locally

Use Node.js 24 LTS and npm:

```bash
npm ci
npm run dev
```

Open `http://localhost:3000` in your browser.

## Contact form setup

The form uses Formspree. Create a form in your Formspree account, then set the form ID as `NEXT_PUBLIC_FORMSPREE_FORM_ID` in the environment that builds the site. For a local build, copy `.env.example` to `.env.local` and replace the example value. In Netlify, add the same variable under the site's environment variables and trigger a new deploy.

The form ID is public browser configuration, not a secret key. Never put passwords, private API keys, or database credentials in a `NEXT_PUBLIC_` variable.

## Build and deploy

```bash
npm ci
npm run build
npm run typecheck
```

The static site is written to `out/`. Netlify can build it from the GitHub repository using `npm run build`; the included `netlify.toml` sets the publish directory to `out` and selects Node 24. The GitHub Actions workflow checks pull requests and pushes but does not publish the site.

## Before launch

- Confirm the legal company name, contact email, services, and every public claim.
- Add a real Formspree form ID and verify delivery from a deployed preview.
- Add a real portrait for the Chief Architect & Developer if desired.
- Publish the applicable privacy and terms pages before collecting enquiries.
- Review the mobile layout, keyboard controls, links, and reduced-motion behavior.

This project uses Next.js static export. It has no server, database, or API routes. Add a runtime host and backend only if the product later needs server-side features.
