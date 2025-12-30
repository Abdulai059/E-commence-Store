# 🚀 Store Deployment Guide

This guide covers how to deploy the E-commerce Store to various hosting platforms.

## 📋 Prerequisites

1. **Node.js** (v18 or higher) installed
2. **Git** repository set up
3. **Supabase** project credentials
4. Account on your chosen hosting platform

---

## 🔧 Step 1: Environment Setup

### Create Environment Variables

Create a `.env` file in the `Store` directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Note:** For Vite projects, environment variables must be prefixed with `VITE_` to be accessible in the browser.

### Update Supabase Configuration

Update your Supabase client files to use environment variables:

**Store/src/lib/supabase.js:**
```javascript
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
```

**Store/src/services/supabase.js:**
```javascript
import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
```

---

## 🏗️ Step 2: Build the Project

Before deploying, build the production version:

```bash
cd Store
npm install
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Test the Build Locally

```bash
npm run preview
```

This serves the production build locally so you can test it before deploying.

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is optimized for React/Vite applications and offers free hosting.

#### Important: Deploying Store and Admin Separately

Since `Store` and `Admin` are separate projects in the same repository, you need to create **two separate Vercel projects**:

1. **Store Project** - Root directory: `Store`
2. **Admin Project** - Root directory: `Admin`

#### Steps for Store Deployment:

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via CLI:**
   ```bash
   cd Store
   vercel
   ```
   Follow the prompts to link your project. When asked about the root directory, make sure it's set to `Store`.

3. **Deploy via Dashboard (Recommended for first-time setup):**
   - Go to [vercel.com](https://vercel.com)
   - Click **"Add New Project"** or **"Import Project"**
   - Select your Git repository (`E-commence-Store` or your repo name)
   - **IMPORTANT:** In the project settings, find **"Root Directory"** and set it to `Store`
   - Configure build settings:
     - **Framework Preset:** Vite
     - **Build Command:** `npm run build` (or leave default)
     - **Output Directory:** `dist`
   - Add environment variables:
     - `VITE_SUPABASE_URL` = Your Supabase URL
     - `VITE_SUPABASE_ANON_KEY` = Your Supabase anon key
   - Click **"Deploy"**

#### Deploy Admin Separately:

Repeat the same process but:
- Create a **new Vercel project**
- Set **Root Directory** to `Admin` instead of `Store`
- Add the same environment variables

#### Vercel Configuration

Create `vercel.json` in the `Store` directory (optional):

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite"
}
```

---

### Option 2: Netlify

Netlify offers free hosting with continuous deployment.

#### Steps:

1. **Install Netlify CLI** (optional):
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy via CLI:**
   ```bash
   cd Store
   netlify deploy --prod
   ```

3. **Deploy via Dashboard:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Configure:
     - **Base directory:** `Store`
     - **Build command:** `npm run build`
     - **Publish directory:** `Store/dist`
   - Add environment variables in Site settings → Environment variables
   - Click **Deploy site**

#### Netlify Configuration

Create `netlify.toml` in the `Store` directory:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Option 3: GitHub Pages

Free hosting directly from your GitHub repository.

#### Steps:

1. **Install gh-pages package:**
   ```bash
   cd Store
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/your-repo-name"
   }
   ```

3. **Update vite.config.js:**
   ```javascript
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   import tailwindcss from "@tailwindcss/vite";

   export default defineConfig({
     plugins: [react(), tailwindcss()],
     base: '/your-repo-name/', // Replace with your repo name
   });
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select source: `gh-pages` branch
   - Save

---

### Option 4: AWS S3 + CloudFront

For enterprise-level hosting with CDN.

#### Steps:

1. **Build the project:**
   ```bash
   cd Store
   npm run build
   ```

2. **Create S3 Bucket:**
   - Go to AWS S3 Console
   - Create bucket (enable static website hosting)
   - Upload contents of `dist/` folder

3. **Configure CloudFront:**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure custom domain (optional)

4. **Set Environment Variables:**
   - Use AWS Systems Manager Parameter Store or
   - Build with environment variables before upload

---

### Option 5: Traditional Web Hosting (cPanel, etc.)

For shared hosting providers.

#### Steps:

1. **Build the project:**
   ```bash
   cd Store
   npm run build
   ```

2. **Upload files:**
   - Upload all contents of `dist/` folder to your web root (usually `public_html` or `www`)

3. **Configure .htaccess** (for Apache):
   Create `.htaccess` in the `dist` folder:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 🔐 Environment Variables Setup

### For Vercel/Netlify:

Add in platform dashboard:
- `VITE_SUPABASE_URL` = Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` = Your Supabase anon/public key

### For GitHub Pages:

Since GitHub Pages doesn't support server-side environment variables, you'll need to:
1. Use a build script that injects variables at build time
2. Or use a different deployment method

### For AWS/Other:

Set environment variables in your CI/CD pipeline or build process.

---

## ✅ Post-Deployment Checklist

- [ ] Environment variables are set correctly
- [ ] Site loads without errors
- [ ] Authentication works (login/signup)
- [ ] Products load correctly
- [ ] Images display properly
- [ ] Routing works (test all pages)
- [ ] Mobile responsiveness verified
- [ ] HTTPS is enabled
- [ ] Custom domain configured (if applicable)

---

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Routing Issues (404 on refresh)

Ensure your hosting provider is configured to serve `index.html` for all routes (SPA routing).

### Environment Variables Not Working

- Ensure variables are prefixed with `VITE_`
- Restart dev server after adding variables
- Check that variables are set in hosting platform

### CORS Issues

Configure CORS in your Supabase project settings to allow your production domain.

---

## 📚 Additional Resources

- [Vite Deployment Guide](https://vite.dev/guide/static-deploy.html)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Supabase Documentation](https://supabase.com/docs)

---

## 🎯 Quick Deploy Commands

### Vercel
```bash
cd Store && vercel --prod
```

### Netlify
```bash
cd Store && netlify deploy --prod
```

### Build Only
```bash
cd Store && npm run build
```

---

**Last Updated:** December 2024

