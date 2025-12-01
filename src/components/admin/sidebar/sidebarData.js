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

// STANDARD: All paths should follow consistent pattern with /admin prefix
export const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    badge: null,
    path: "/admin",
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
        path: "/admin/allproduct",
      },
      {
        id: "add-product",
        label: "Add Product",
        icon: Plus,
        path: "/admin/addproduct",
      },
      {
        id: "edit-product",
        label: "Edit Product",
        icon: Edit,
        path: "/admin/edit-product",
      },
    ],
  },

  {
    id: "orders",
    label: "Orders",
    icon: ShoppingCart,
    badge: "12",
    path: "/admin/orders",
  },
  {
    id: "customers",
    label: "Customers",
    icon: Users,
    badge: "1.2k",
    path: "/admin/customers",
  },
  {
    id: "categories",
    label: "Categories",
    icon: Tag,
    badge: null,
    path: "/admin/categories",
  },
  {
    id: "shipping",
    label: "Shipping",
    icon: Truck,
    badge: null,
    path: "/admin/shipping",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    badge: null,
    path: "/admin/analytics",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    badge: null,
    path: "/admin/settings",
  },
];
