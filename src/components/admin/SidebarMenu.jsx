import { ChevronDown } from "lucide-react";
import SidebarSubMenu from "./SidebarSubMenu";
import { useNavigate } from "react-router-dom";

export default function SidebarMenu({
  item,
  isActive,
  isCollapsed,
  expandedMenu,
  setExpandedMenu,
  activeItem,
  setActiveItem,
  setIsMobileOpen,
}) {
  const navigate = useNavigate();
  const Icon = item.icon;
  const isExpanded = expandedMenu === item.id;
  const hasSubItems = item.subItems && item.subItems.length > 0;

  const handleClick = () => {
    if (hasSubItems) {
      setExpandedMenu(isExpanded ? null : item.id);

      // Navigate if parent has a path
      if (item.path) {
        navigate(item.path);
        setActiveItem(item.id);
        setIsMobileOpen(false);
      }
    } else {
      // Navigate normally
      if (item.path) {
        navigate(item.path);
        setActiveItem(item.id);
        setIsMobileOpen(false);
      }
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`group relative flex w-full items-center gap-3 rounded-lg px-3 py-4 transition-all duration-200 ${
          isActive ? "bg-green-400 shadow-lg shadow-red-300/50" : "hover:bg-gray-100/50"
        }`}
      >
        <Icon className={`h-5 w-5 shrink-0 ${isActive ? "text-white" : "text-gray-800 "}`} />

        {!isCollapsed && (
          <>
            <span
              className={`flex-1 text-left text-sm font-medium ${isActive ? "text-white" : "text-gray-800"}`}
            >
              {item.label}
            </span>
            {item.badge && (
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                  isActive ? "bg-white text-red-600" : "bg-gray-700 text-slate-200"
                }`}
              >
                {item.badge}
              </span>
            )}

            {hasSubItems && (
              <ChevronDown
                className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
              />
            )}
          </>
        )}

        {isCollapsed && item.badge && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
            {item.badge.length > 2 ? "9+" : item.badge}
          </span>
        )}

        {isCollapsed && (
          <div className="absolute left-full z-50 ml-2 hidden rounded-lg bg-slate-900 px-3 py-2 whitespace-nowrap opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:block">
            <span className="text-sm font-medium">{item.label}</span>
            {item.badge && (
              <span className="ml-2 rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold">
                {item.badge}
              </span>
            )}
          </div>
        )}
      </button>

      {hasSubItems && isExpanded && !isCollapsed && (
        <SidebarSubMenu
          subItems={item.subItems}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          setIsMobileOpen={setIsMobileOpen}
        />
      )}
    </div>
  );
}
