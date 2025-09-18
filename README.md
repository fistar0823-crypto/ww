<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1OD5ulRCTOaMjkU7ZuWQi1ZQuXqEWl8yH

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## One-click Deploy (GitHub Pages)

1. Create a **public** repo named `ww` in your account (or use the existing `ww` repo).
2. Upload **all** files from this zip (root contains `package.json`, `vite.config.ts`, `index.html`, `src/...`).
3. Push to `main` branch. GitHub Actions will build and publish to Pages.
4. In **Settings → Pages**, set Source = `GitHub Actions` (recommended) or keep `Deploy from a branch (gh-pages)`.
5. Your site will be available at: `https://<your-account>.github.io/ww/`.

### Firestore
This build uses your Firestore project `fir-f51b8` and stores data under `users/demoUser/...` collections.
