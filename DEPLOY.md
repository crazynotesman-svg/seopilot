# SEOPilot — Deployment Guide

## Prerequisites

- A **DeepSeek API key** (free to get at https://platform.deepseek.com/api_keys)
- A **GitHub account** (free)
- A **Cloudflare account** (free)
- A **domain name** (optional, ~$10/year; or use `*.pages.dev` free subdomain)

## Step 1: Configure Your API Key

Open `assets/js/config.js` and change:

```js
deepseek: {
  apiKey: 'YOUR_DEEPSEEK_API_KEY',   // ← Paste your real key here
  ...
}
```

Also update:
- `siteUrl` → your actual domain
- `contactEmail` → your email

## Step 2: Test Locally

Open `index.html` in your browser, or run a local server:

```
npx serve seopilot/
```

Test each tool to verify everything works before deploying.

## Step 3: Push to GitHub

```bash
cd seopilot/
git init
git add .
git commit -m "Initial commit: SEOPilot v1.0"
git remote add origin https://github.com/YOUR_USERNAME/seopilot.git
git push -u origin main
```

## Step 4: Deploy to Cloudflare Pages

1. Go to https://dash.cloudflare.com/ → Workers & Pages → Create
2. Connect your GitHub repo
3. Build settings:
   - **Framework preset**: None (static site)
   - **Build command**: (leave empty)
   - **Output directory**: (leave empty — root is the site)
4. Click "Save and Deploy"

Cloudflare will give you a `*.pages.dev` URL. Add your custom domain in the "Custom domains" tab if you have one.

## Step 5: Submit to Google Search Console

1. Go to https://search.google.com/search-console
2. Add your domain as a property
3. Verify ownership (DNS TXT record via Cloudflare)
4. Submit your sitemap: `https://yourdomain.com/sitemap.xml`

## What's Configurable

All settings in `assets/js/config.js`:

| Setting | Purpose |
|---------|---------|
| `deepseek.apiKey` | Your DeepSeek API key (REQUIRED for AI Title Generator) |
| `deepseek.model` | Model name: `deepseek-chat` or `deepseek-reasoner` |
| `siteUrl` | Your domain (for canonical URLs and sitemap) |
| `contactEmail` | Contact email (shown in footer) |
| `googleAnalyticsId` | Add later in Phase 2 for GA4 tracking |
| `adsensePublisherId` | Add later in Phase 3 for monetization |

## Cost Estimate

| Item | Cost |
|------|------|
| Domain | ~$10/year |
| Cloudflare Pages | Free (unlimited bandwidth) |
| DeepSeek API | ~$0.14/1M input tokens (~$1-5/month at moderate usage) |
| **Total monthly** | **~$1-5** |

## Adding More Blog Posts

Create a new directory under `blog/`:
```
blog/your-post-slug/
  index.html   ← Copy existing post as template, edit content
```
Then update `blog/index.html` to link it.
