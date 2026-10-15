# Deployment guide

This site builds into static files in `out/`. The recommended first release path is GitHub for the source code and Netlify for hosting.

## 1. Prepare the source

1. Use Node.js 24 LTS.
2. Set `NEXT_PUBLIC_FORMSPREE_FORM_ID` to the ID for your real Formspree form.
3. Install and check the project:

   ```bash
   npm ci
   npm run build
   npm run typecheck
   ```

4. Confirm `out/` is created and review the page locally or through a deploy preview.

## 2. Publish source to GitHub

GitHub Desktop can publish this folder without terminal commands. Create or add a repository for the project, review the file list, commit the files, then select **Publish Repository**. Keeping the source repository private does not make the hosted site private.

Do not commit `.env.local`, passwords, API secrets, or private customer information. The `.gitignore` excludes local environment files.

## 3. Host on Netlify

1. Sign in to Netlify and choose **Add new project → Import an existing project**.
2. Connect GitHub and select this repository.
3. Use branch `main`, build command `npm run build`, and publish directory `out`.
4. Add `NEXT_PUBLIC_FORMSPREE_FORM_ID` in the site's environment variables.
5. Deploy and test the temporary `*.netlify.app` URL. Confirm form submission reaches the intended inbox.
6. Connect your own domain in Netlify when ready and follow the exact DNS records shown in its dashboard.

Pushes to the production branch trigger a new deployment. Pull requests can get separate preview URLs for review before the production branch changes.

## 4. Plans and scaling

Netlify's plan limits and pricing can change. Its Free plan currently has a monthly usage-credit limit; monitor usage and move to a paid plan if traffic or team needs require it. Vercel's free Hobby plan is for personal, noncommercial use, so use a business plan for a commercial company site.

For the current static brochure site, the CDN serves generated files and there is no app server to scale. If the site later needs sign-in, server-side processing, or a database, revisit the static-export setup and choose a runtime host plus a managed database/API.
