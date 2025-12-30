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
  ChevronDown,
  Plus,
  Edit,
  List
} from 'lucide-react';
import { useState } from 'react';

export default function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');
  const [expandedMenu, setExpandedMenu] = useState(null);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
    { 
      id: 'products', 
      label: 'Products', 
      icon: Package, 
      badge: '245',
      subItems: [
        { id: 'all-products', label: 'All Products', icon: List },
        { id: 'add-product', label: 'Add Product', icon: Plus },
        { id: 'edit-product', label: 'Edit Product', icon: Edit },
      ]
    },
    { id: 'orders', label: 'Orders', icon: ShoppingCart, badge: '12' },
    { id: 'customers', label: 'Customers', icon: Users, badge: '1.2k' },
    { id: 'categories', label: 'Categories', icon: Tag, badge: null },
    { id: 'shipping', label: 'Shipping', icon: Truck, badge: null },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, badge: null },
    { id: 'settings', label: 'Settings', icon: Settings, badge: null },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center shadow-lg"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Sidebar */}
      <div className={`
        ${isCollapsed ? 'lg:w-20' : 'lg:w-64'} 
        w-64
        h-screen 
        bg-gradient-to-b from-slate-900 to-slate-800 
        text-white 
        transition-all duration-300 
        flex flex-col 
        shadow-2xl
        fixed lg:relative
        z-40
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo Section */}
        <div className="p-6 flex items-center justify-between border-b border-slate-700">
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
                <Store className="w-6 h-6" />
              </div>
              <div>
                <h1 className="font-bold text-lg">Pressmart</h1>
                <p className="text-xs text-slate-400">Admin Panel</p>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg mx-auto">
              <Store className="w-6 h-6" />
            </div>
          )}
        </div>

        {/* Toggle Button - Hidden on Mobile */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:block absolute -right-3 top-20 w-6 h-6 bg-red-500 rounded-full items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 mx-auto" />
          ) : (
            <ChevronLeft className="w-4 h-4 mx-auto" />
          )}
        </button>

        {/* Menu Items */}
        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            const isExpanded = expandedMenu === item.id;
            const hasSubItems = item.subItems && item.subItems.length > 0;
            
            return (
              <div key={item.id}>
                <button
                  onClick={() => {
                    if (hasSubItems) {
                      setExpandedMenu(isExpanded ? null : item.id);
                    } else {
                      setActiveItem(item.id);
                      setIsMobileOpen(false);
                    }
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group relative ${
                    isActive 
                      ? 'bg-gradient-to-r from-red-500 to-red-600 shadow-lg shadow-red-500/50' 
                      : 'hover:bg-slate-700/50'
                  }`}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
                  
                  {!isCollapsed && (
                    <>
                      <span className={`flex-1 text-left font-medium text-sm ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                          isActive 
                            ? 'bg-white text-red-600' 
                            : 'bg-slate-700 text-slate-300'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                      {hasSubItems && (
                        <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      )}
                    </>
                  )}

                  {isCollapsed && item.badge && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold">
                      {item.badge.length > 2 ? '9+' : item.badge}
                    </span>
                  )}

                  {isCollapsed && (
                    <div className="hidden lg:block absolute left-full ml-2 px-3 py-2 bg-slate-900 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                      <span className="text-sm font-medium">{item.label}</span>
                      {item.badge && (
                        <span className="ml-2 px-2 py-0.5 bg-red-500 rounded-full text-xs font-semibold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  )}
                </button>

                {/* Sub Items */}
                {hasSubItems && isExpanded && !isCollapsed && (
                  <div className="mt-1 ml-8 space-y-1">
                    {item.subItems.map((subItem) => {
                      const SubIcon = subItem.icon;
                      const isSubActive = activeItem === subItem.id;
                      
                      return (
                        <button
                          key={subItem.id}
                          onClick={() => {
                            setActiveItem(subItem.id);
                            setIsMobileOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 text-sm ${
                            isSubActive
                              ? 'bg-red-500/20 text-red-400'
                              : 'text-slate-400 hover:bg-slate-700/30 hover:text-white'
                          }`}
                        >
                          <SubIcon className="w-4 h-4" />
                          <span>{subItem.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-slate-700">
          <div className={`flex items-center gap-3 px-3 py-3 rounded-lg bg-slate-700/30 ${isCollapsed ? 'justify-center' : ''}`}>
            {!isCollapsed ? (
              <>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-sm">
                  AD
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">Admin User</p>
                  <p className="text-xs text-slate-400 truncate">admin@pressmart.com</p>
                </div>
              </>
            ) : (
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-sm">
                AD
              </div>
            )}
          </div>

          <button className={`w-full flex items-center gap-3 px-3 py-3 mt-2 rounded-lg hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-all duration-200 group ${isCollapsed ? 'justify-center' : ''}`}>
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span className="font-medium text-sm">Logout</span>}
            
            {isCollapsed && (
              <div className="hidden lg:block absolute left-full ml-2 px-3 py-2 bg-slate-900 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
                <span className="text-sm font-medium">Logout</span>
              </div>
            )}
          </button>
        </div>
      </div>
    </>
  );
}