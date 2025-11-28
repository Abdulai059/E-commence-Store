export default function SidebarSubMenu({ subItems, activeItem, setActiveItem, setIsMobileOpen }) {
  return (
    <div className="mt-1 ml-8 space-y-1">
      {subItems.map((subItem) => {
        const SubIcon = subItem.icon;
        const isSubActive = activeItem === subItem.id;
        
        return (
          <button
            key={subItem.id}
            onClick={() => {
              setActiveItem(subItem.id);
              setIsMobileOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 text-sm text-gray-800 hover:bg-green-100 
            `}
          >
            <SubIcon className="w-4 h-4" />
            <span>{subItem.label}</span>
          </button>
        );
      })}
    </div>
  );
}