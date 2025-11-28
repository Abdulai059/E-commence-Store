import SidebarMenuItem from "./idebarMenuItem";

function SidebarMenu({
  menuItems,
  hasSubItems,
  activeItem,
  setActiveItem,
  isCollapsed,
  closeMobile,
}) {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleExpand = (id) => setExpandedMenu(expandedMenu === id ? null : id);

  return (
    <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-6">
      {menuItems.map((item) => (
        <SidebarMenuItem
          key={item.id}
          item={item}
          isActive={activeItem === item.id}
          isCollapsed={isCollapsed}
          isExpanded={expandedMenu === item.id}
          toggleExpand={toggleExpand}
          setActiveItem={setActiveItem}
          onClick={() => {
            setActiveItem(item.id);
            closeMobile();
          }}
        />
      ))}
    </nav>
  );
}
export default SidebarMenu;
