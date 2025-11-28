function SidebarMenuItem({ item, isActive, isCollapsed, onClick }) {
  const Icon = item.icon;

  return (
    <button
      onClick={onClick}
      className={`group relative flex w-full items-center gap-3 rounded-lg px-3 py-4 transition-all duration-200 hover:bg-gray-200/50 ${
        isActive
          ? "bg-gradient-to-r from-green-400 to-green-500 shadow-lg shadow-red-200/50"
          : "hover:bg-gray-100/50"
      }`}
    >
      <Icon
        size={20}
        className={`h-5 w-5 flex-shrink-0 ${isActive ? "text-white" : "text-slate-900"}`}
      />

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
                isActive ? "bg-white text-red-600" : "bg-slate-700 text-slate-300"
              }`}
            >
              {item.badge}
            </span>
          )}
        </>
      )}

      {/* Collapsed badge */}
      {isCollapsed && item.badge && (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
          {item.badge.length > 2 ? "9+" : item.badge}
        </span>
      )}
    </button>
  );
}
export default SidebarMenuItem;
