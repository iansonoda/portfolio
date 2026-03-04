# Deployment Steps

## 1. Verify Production Build

Before deploying, make sure everything builds correctly.

```bash
npm run build
npm run preview
```

## 2. Deploy to Vercel (Recommended)

The easiest way to deploy a Vite React app is via Vercel:

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com).
3. Click **Add New** > **Project** and select your GitHub repository.
4. Vercel will automatically detect `Vite` and configure the build settings (`npm run build` and `dist` output folder).
5. Click **Deploy**.

## 3. Alternative: GitHub Pages

1. In your `vite.config.js`, add the `base` configuration:
   ```javascript
   export default defineConfig({
     base: "/repository-name/",
     plugins: [react()],
   });
   ```
2. Run `npm run build`
3. Push the `dist` folder to a `gh-pages` branch, or use a GitHub Actions workflow to deploy the static files to GitHub pages.

## Custom Domain

To add a custom domain, simply navigate to your project settings in Vercel (or your chosen provider), go to the **Domains** tab, and enter your domain name. Configure your DNS provider to add the A/CNAME records provided by Vercel.
