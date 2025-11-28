import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Store,
  Tag,
  Truck,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";
import SidebarUser from "./SidebarUser";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, badge: null },
  {
    id: "products",
    label: "Products",
    icon: Package,
    badge: "245",
    subItems: [
      { id: "all-products", label: "All Products", icon: List },
      { id: "add-product", label: "Add Product", icon: Plus },
      { id: "edit-product", label: "Edit Product", icon: Edit },
    ],
  },
  { id: "orders", label: "Orders", icon: ShoppingCart, badge: "12" },
  { id: "customers", label: "Customers", icon: Users, badge: "1.2k" },
  { id: "categories", label: "Categories", icon: Tag, badge: null },
  { id: "shipping", label: "Shipping", icon: Truck, badge: null },
  { id: "analytics", label: "Analytics", icon: BarChart3, badge: null },
  { id: "settings", label: "Settings", icon: Settings, badge: null },
];

export default function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");

  return (
    <>
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white shadow-lg lg:hidden"
      >
        {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      <div
        className={` ${isCollapsed ? "lg:w-20" : "lg:w-84"} fixed z-40 flex h-screen w-64 flex-col text-white shadow-2xl transition-all duration-300 lg:relative ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <SidebarLogo isCollapsed={isCollapsed} />

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute top-20 -right-3 hidden h-6 w-6 items-center justify-center rounded-full bg-red-500 shadow-lg transition-colors hover:bg-red-600 lg:block"
        >
          {isCollapsed ? (
            <ChevronRight className="mx-auto h-4 w-4" />
          ) : (
            <ChevronLeft className="mx-auto h-4 w-4" />
          )}
        </button>

        <SidebarMenu
          menuItems={menuItems}
          hasSubItems={hasSubItems}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isCollapsed={isCollapsed}
          closeMobile={() => setIsMobileOpen(false)}
        />

        <SidebarUser isCollapsed={isCollapsed} />
      </div>
    </>
  );
}
