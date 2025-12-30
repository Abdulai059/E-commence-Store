import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  Tag,
  Truck,
  Plus,
  Edit,
  List,
} from "lucide-react";

// Admin routes - no /admin prefix needed since this is the admin app
export const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    badge: null,
    path: "/",
  },
  {
    id: "products",
    label: "Products",
    icon: Package,
    badge: "245",
    subItems: [
      {
        id: "all-products",
        label: "All Products",
        icon: List,
        path: "/allproduct",
      },
      {
        id: "add-product",
        label: "Add Product",
        icon: Plus,
        path: "/addproduct",
      },
      {
        id: "edit-product",
        label: "Edit Product",
        icon: Edit,
        path: "/edit-product",
      },
    ],
  },

  {
    id: "orders",
    label: "Orders",
    icon: ShoppingCart,
    badge: "12",
    path: "/orders",
  },
  {
    id: "customers",
    label: "Customers",
    icon: Users,
    badge: "1.2k",
    path: "/customers",
  },
  {
    id: "categories",
    label: "Categories",
    icon: Tag,
    badge: null,
    path: "/categories",
  },
  {
    id: "shipping",
    label: "Shipping",
    icon: Truck,
    badge: null,
    path: "/shipping",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    badge: null,
    path: "/analytics",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    badge: null,
    path: "/settings",
  },
];
