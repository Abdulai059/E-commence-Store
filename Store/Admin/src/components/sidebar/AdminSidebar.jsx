import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import SidebarUser from "./SidebarUser";
import { menuItems } from "./sidebarData";
import SidebarMenu from "./SidebarMenu";
import { useLocation } from "react-router-dom";
import SidebarHeader from "./SidebarHeader";

export default function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");
  const [expandedMenu, setExpandedMenu] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;

    for (const item of menuItems) {
      if (item.path === currentPath) {
        setActiveItem(item.id);
        setExpandedMenu(null);
        return;
      }

      if (item.subItems) {
        for (const subItem of item.subItems) {
          if (subItem.path === currentPath) {
            setActiveItem(subItem.id);
            setExpandedMenu(item.id);
          }
        }
      }
    }
  }, [location.pathname]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white shadow-lg lg:hidden"
      >
        {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={` ${isCollapsed ? "lg:w-20" : "lg:w-80"} text-gray fixed z-40 flex h-screen w-64 flex-col bg-white shadow-2xl transition-all duration-300 lg:relative ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} `}
      >
        <SidebarHeader isCollapsed={isCollapsed} />

        {/* Toggle Button - Hidden on Mobile */}
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

        {/* Menu Items */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-6">
          {menuItems.map((item) => (
            <SidebarMenu
              key={item.id}
              item={item}
              isActive={activeItem === item.id}
              isCollapsed={isCollapsed}
              expandedMenu={expandedMenu}
              setExpandedMenu={setExpandedMenu}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              setIsMobileOpen={setIsMobileOpen}
            />
          ))}
        </nav>

        <SidebarUser isCollapsed={isCollapsed} />
      </div>
    </>
  );
}
