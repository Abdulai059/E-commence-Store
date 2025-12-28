# 🚀 Simple Vercel Deployment Guide

This is a **step-by-step guide** to deploy both Admin and Store on Vercel.

---

## 📋 What You Need

- Your GitHub repository URL
- Supabase credentials:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`

---

## 🎯 Step 1: Deploy Admin (First Project)

### Option A: Using Vercel Dashboard (Easiest)

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub

2. **Create New Project:**
   - Click **"Add New..."** button (top right)
   - Click **"Project"**
   - Click **"Import Git Repository"**
   - Select your repository (`E-commence-Store` or your repo name)

3. **Configure Project:**
   - **Project Name:** `ecommerce-admin` (or any name you like)
   
   - **Root Directory:** ⚠️ **IMPORTANT!**
     - Click **"Edit"** next to "Root Directory"
     - Type: `Admin` (exactly like this, case-sensitive)
     - Click **"Continue"**
   
   - **Framework:** Should auto-detect as "Vite" ✅
   - **Build Command:** `npm run build` (should be auto-filled)
   - **Output Directory:** `dist` (should be auto-filled)
   - **Install Command:** `npm install` (should be auto-filled)

4. **Add Environment Variables:**
   - Click **"Environment Variables"**
   - Add these two:
     ```
     Name: VITE_SUPABASE_URL
     Value: (paste your Supabase URL)
     ```
     ```
     Name: VITE_SUPABASE_ANON_KEY
     Value: (paste your Supabase anon key)
     ```
   - Click **"Save"** for each

5. **Deploy:**
   - Click **"Deploy"** button
   - Wait for deployment to complete (2-3 minutes)
   - ✅ Your Admin is now live! Copy the URL

---

## 🛍️ Step 2: Deploy Store (Second Project)

**IMPORTANT:** You need to create a **NEW project** for Store!

1. **Go to Vercel Dashboard:**
   - You should see your Admin project
   - Click **"Add New..."** button again (top right)
   - Click **"Project"**

2. **Import Same Repository:**
   - Click **"Import Git Repository"**
   - Select the **SAME repository** (yes, the same one!)

3. **Configure Project:**
   - **Project Name:** `ecommerce-store` (different name from Admin!)
   
   - **Root Directory:** ⚠️ **VERY IMPORTANT!**
     - Click **"Edit"** next to "Root Directory"
     - Type: `Store` (exactly like this, case-sensitive)
     - Click **"Continue"**
   
   - **Framework:** Should auto-detect as "Vite" ✅
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Add Environment Variables:**
   - Click **"Environment Variables"**
   - Add the same two variables:
     ```
     Name: VITE_SUPABASE_URL
     Value: (same Supabase URL)
     ```
     ```
     Name: VITE_SUPABASE_ANON_KEY
     Value: (same Supabase anon key)
     ```
   - Click **"Save"** for each

5. **Deploy:**
   - Click **"Deploy"** button
   - Wait for deployment to complete
   - ✅ Your Store is now live! Copy the URL

---

## ✅ After Deployment

You should now have **2 separate projects** in Vercel:

```
Vercel Dashboard
├── 📁 ecommerce-admin
│   └── URL: https://ecommerce-admin.vercel.app
│   └── Root: Admin
│
└── 📁 ecommerce-store
    └── URL: https://ecommerce-store.vercel.app
    └── Root: Store
```

---

## 🔧 Alternative: Using Vercel CLI

If you prefer command line:

### Deploy Admin:
```bash
cd Admin
npm install -g vercel
vercel
# When asked:
# - Set root directory: Admin
# - Add environment variables when prompted
```

### Deploy Store:
```bash
cd Store
vercel
# When asked:
# - Set root directory: Store
# - Add environment variables when prompted
```

---

## 🐛 Troubleshooting

### Problem: "Cannot find module" or build errors

**Solution:**
- Make sure Root Directory is set correctly (`Admin` or `Store`)
- Check that `package.json` exists in that folder
- Try clearing Vercel cache and redeploy

### Problem: Environment variables not working

**Solution:**
- Make sure variables start with `VITE_`
- Redeploy after adding variables
- Check variable names are exact (case-sensitive)

### Problem: Can't find Root Directory setting

**Solution:**
- It's in the "Configure Project" step before deploying
- Or go to Project Settings → General → Root Directory (after project is created)

### Problem: Only seeing one project

**Solution:**
- You need to create **TWO separate projects**
- Same repository, but different Root Directory
- Different project names.

---

## 📝 Quick Checklist

**For Admin:**
- [ ] Created new Vercel project
- [ ] Set Root Directory to `Admin`
- [ ] Added environment variables
- [ ] Deployed successfully

**For Store:**
- [ ] Created **NEW** Vercel project (separate from Admin)
- [ ] Set Root Directory to `Store`
- [ ] Added environment variables
- [ ] Deployed successfully

---

## 🎉 Done!

Both projects are now live and can be updated independently!

**Need help?** Check the detailed guide in `Store/DEPLOYMENT.md`

