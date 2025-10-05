WLA App
========

A minimal static site scaffolded for GitHub Pages deployment.

Local development
-----------------

Open `public/index.html` directly in your browser, or run a simple static server:

```bash
# Python 3
python -m http.server --directory public 5500

# or Node (if installed)
npx serve public -p 5500 --single
```

Deploying to GitHub Pages
-------------------------

1. Create a repository on GitHub (e.g., `WLA_app`).
2. Push this project to GitHub with the default branch named `main`.
3. Ensure GitHub Pages source is set to "GitHub Actions" in Settings → Pages.
4. The workflow at `.github/workflows/deploy.yml` builds and deploys the `public/` folder automatically on pushes to `main`.

Troubleshooting GitHub Actions permissions
-----------------------------------------

If you see errors like "Resource not accessible by integration" or "Get Pages site failed":

- Repo Settings → Actions → General → Workflow permissions → select "Read and write permissions" and Save.
- Ensure Actions is enabled for the repository (same page).
- Ensure the repository default branch is `main` (Settings → Branches), or update the workflow trigger branch.
- Confirm `.github/workflows/deploy.yml` includes job-level `permissions` for `contents: read`, `pages: write`, `id-token: write`.
- In Settings → Pages: make sure Source is "GitHub Actions". Remove legacy pages settings if present.

Project structure
-----------------

```
public/
  index.html
  assets/
    css/styles.css
    js/main.js
.github/
  workflows/deploy.yml
public/assets/img/
  wla-logo.svg
  partner-logo.svg
```

Optional: Custom domain
-----------------------

Add a `CNAME` file under `public/` containing your domain name (e.g., `www.example.com`).


