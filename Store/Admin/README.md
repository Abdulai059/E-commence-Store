# E-commerce Admin Dashboard

This is the admin dashboard for the e-commerce store, separated into its own independent project.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

3. Start the development server:
```bash
npm run dev
```

## Project Structure

- `src/pages/` - Admin page components
- `src/components/` - Admin components (dashboard, order, product, sidebar, etc.)
- `src/api/` - API calls for orders and products
- `src/hooks/` - Custom React hooks
- `src/services/` - External service integrations (Supabase, AI, etc.)
- `src/contexts/` - React contexts (Auth)
- `src/utils/` - Utility functions
- `src/styles/` - Global styles

## Features

- Dashboard with order statistics
- Product management (add, edit, view all products)
- Order management
- Category management
- Admin authentication

## Routes

- `/` - Redirects to dashboard
- `/dashboard` - Admin dashboard
- `/allproduct` - All products list
- `/addproduct` - Add new product
- `/categories` - Category management
- `/orders` - Orders list
- `/orders/:orderId` - Order details
- `/product/:productId` - Product details (admin view)

## Notes

This project is completely independent from the client app. All shared code has been duplicated to ensure both projects work independently.

