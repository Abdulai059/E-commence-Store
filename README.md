# E-commerce Project

This repository contains both the client-facing store and the admin dashboard as separate, independent projects

## 📁 Project Structure

```
E-commerce/
├── E-commence-Store/   # Client-facing e-commerce store
└── E-commence-Admin/   # Admin dashboard
```

---

## 🛍️ E-commence-Store (Client App)

The customer-facing e-commerce website

**Location:** `E-commerce/E-commence-Store/`

### Features
- Product browsing and search
- Shopping cart
- Checkout process
- User authentication
- Product details and categories

### Run the Client App
```bash
cd E-commerce/E-commence-Store
npm install  # If not already installed
npm run dev
```

The app will run on `http://localhost:5173`

---

## 👨‍💼 E-commence-Admin (Admin App)

The admin dashboard for managing the e-commerce store.

**Location:** `E-commerce/E-commence-Admin/`

### Features
- Dashboard with order statistics
- Product management (add, edit, view all products)
- Order management
- Category management
- Admin authentication

### Run the Admin App
```bash
cd E-commerce/E-commence-Admin
npm install  # If not already installed
npm run dev
```

The app will run on `http://localhost:5174` (or next available port)

---

## 🚀 Quick Start

### Run Both Apps Simultaneously

**Terminal 1 - Client App:**
```bash
cd E-commerce/E-commence-Store
npm run dev
```

**Terminal 2 - Admin App:**
```bash
cd E-commerce/E-commence-Admin
npm run dev
```

Both apps can run at the same time on different ports!

---

## 📝 Project Details

### Technology Stack
- **React 19** - UI framework
- **Vite** - Build tool
- **React Router** - Routing
- **TanStack Query** - Data fetching
- **Supabase** - Backend/Database
- **Tailwind CSS** - Styling
- **Redux Toolkit** - State management (client app)

### Project Independence

Both projects are **completely independent**:
- ✅ Separate `node_modules`
- ✅ Separate build processes
- ✅ Separate deployments
- ✅ No shared code dependencies
- ✅ Can be developed and deployed independently

---

## 🔧 Development

### Client App Development
All client-facing features are developed in `E-commence-Store/`

### Admin App Development
All admin features are developed in `E-commence-Admin/`

### Environment Variables

Both projects may need environment variables for Supabase:

**E-commence-Store/.env:**
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

**E-commence-Admin/.env:**
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

---

## 📦 Build for Production

### Build Client App
```bash
cd Store
npm run build
```

### Build Admin App
```bash
cd Admin
npm run build
```

---

## 🚀 Deployment

### Deploy the Store

For detailed deployment instructions, see **[Store/DEPLOYMENT.md](./Store/DEPLOYMENT.md)**

**Quick Deploy Options:**
- **Vercel** (Recommended): `cd Store && vercel --prod`
- **Netlify**: `cd Store && netlify deploy --prod`
- **GitHub Pages**: See deployment guide for setup

**Before deploying:**
1. Set up environment variables (`.env` file)
2. Update Supabase configuration to use environment variables
3. Build the project: `npm run build`

---

## 🎯 Project Status

- ✅ **Client App**: Fully functional, unchanged from original
- ✅ **Admin App**: Separated into independent project, fully functional
- ✅ **Both projects**: Ready for development and deployment

---

## 📚 Documentation

- **[Store/DEPLOYMENT.md](./Store/DEPLOYMENT.md)** - Complete deployment guide for the Store
- See `E-commence-Store/ADMIN_MIGRATION_PLAN.md` for migration details (if exists)
- See `E-commence-Store/FILE_MAPPING_REFERENCE.md` for file mapping reference (if exists)
- See `MIGRATION_COMPLETE.md` for migration completion summary (if exists)

---

**Last Updated:** December 2024


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
