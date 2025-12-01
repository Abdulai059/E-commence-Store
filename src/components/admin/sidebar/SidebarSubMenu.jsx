import { useNavigate } from "react-router-dom";

function SidebarSubMenu({ subItems, activeItem, setActiveItem, setIsMobileOpen }) {
  const navigate = useNavigate();

  const handleSubItemClick = (subItem) => {
    if (subItem.path) {
      navigate(subItem.path);
      setActiveItem(subItem.id);
    }
    setIsMobileOpen(false);
  };

  return (
    <div className="mt-1 ml-8 space-y-1">
      {subItems.map((subItem) => {
        const SubIcon = subItem.icon;
        const isSubActive = activeItem === subItem.id;

        return (
          <button
            key={subItem.id}
            onClick={() => handleSubItemClick(subItem)}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-800 transition-all duration-200 hover:bg-green-100`}
          >
            <SubIcon className="h-4 w-4" />
            <span>{subItem.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default SidebarSubMenu;
