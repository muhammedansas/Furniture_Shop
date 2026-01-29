# Furniture Shop - Deployment Guide

Deploy your furniture shop to any of these platforms. All support free tiers.

---

## Option 1: Vercel (Recommended - Easiest)

Vercel is built for React/Vite and requires almost no configuration.

### Steps:

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Furniture Shop"
   git branch -M main
   # Create a new repo on github.com, then:
   git remote add origin https://github.com/YOUR_USERNAME/furniture-shop.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) → Sign in with GitHub
   - Click **"Add New..."** → **"Project"**
   - Import your `furniture-shop` repository
   - Vercel auto-detects Vite. Click **Deploy**
   - Done! Your site will be live at `https://furniture-shop-xxx.vercel.app`

3. **Custom domain** (optional): Project Settings → Domains → Add your domain

---

## Option 2: Netlify

### Steps:

1. **Push your code to GitHub** (same as above)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com) → Sign in with GitHub
   - Click **"Add new site"** → **"Import an existing project"**
   - Choose **GitHub** and select your `furniture-shop` repo
   - Build settings (usually auto-detected):
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click **"Deploy site"**

3. **SPA routing** is already configured via `public/_redirects` (included in this project)

4. Your site will be at `https://random-name.netlify.app`

---

## Option 3: Cloudflare Pages

### Steps:

1. **Push your code to GitHub** (same as above)

2. **Deploy on Cloudflare Pages**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages**
   - Click **"Create"** → **"Pages"** → **"Connect to Git"**
   - Select your GitHub repo
   - Build settings:
     - **Framework preset:** None
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
   - Click **"Save and Deploy"**

3. Add `public/_redirects` for SPA routing, or in Cloudflare: **Settings** → **Functions** → Add a redirect rule for `/*` → `/index.html`

---

## Option 4: GitHub Pages

For GitHub Pages, you need to set the base path to your repo name.

1. **Update `vite.config.js`** - Add base path:
   ```js
   base: '/furniture-shop/',  // Replace with your repo name
   ```

2. **Update `App.jsx`** - Use `HashRouter` instead of `BrowserRouter` for simpler setup:
   ```js
   import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
   // Change BrowserRouter to HashRouter
   ```

3. **Deploy:**
   - Install: `npm install -D gh-pages`
   - Add to `package.json` scripts: `"deploy": "vite build && gh-pages -d dist"`
   - Run: `npm run deploy`
   - Enable GitHub Pages: Repo → Settings → Pages → Source: `gh-pages` branch

---

## Quick Comparison

| Platform      | Free Tier | Custom Domain | Auto Deploy | Ease |
|---------------|-----------|---------------|-------------|------|
| **Vercel**    | ✅        | ✅            | ✅          | ⭐⭐⭐ |
| **Netlify**   | ✅        | ✅            | ✅          | ⭐⭐⭐ |
| **Cloudflare**| ✅        | ✅            | ✅          | ⭐⭐  |
| **GitHub Pages** | ✅     | ✅            | Manual      | ⭐   |

**Recommendation:** Use **Vercel** for the smoothest experience with React + Vite.
