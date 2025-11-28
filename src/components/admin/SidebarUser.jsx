import { LogOut } from 'lucide-react';

export default function SidebarUser({ isCollapsed }) {
  return (
    <div className="p-4 border-t border">
      <div className={`flex items-center gap-3 px-3 py-3 rounded-lg  bg-gradient-to-br from-red-200 to-green-100  ${isCollapsed ? 'justify-center' : ''}`}>
        {!isCollapsed ? (
          <>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-red-500 rounded-full flex items-center justify-center font-bold text-sm">
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

      <button className={`w-full flex items-center gap-3 px-3 py-3 mt-2 rounded-lg hover:bg-gray-200 text-red-500 hover:text-gray-800 transition-all duration-200 group ${isCollapsed ? 'justify-center' : ''}`}>
        <LogOut className="w-5 h-5 flex-shrink-0" />
        {!isCollapsed && <span className="font-medium text-sm">Logout</span>}
        
        {isCollapsed && (
          <div className="hidden lg:block absolute left-full ml-2 px-3 py-2 bg-slate-900 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
            <span className="text-sm font-medium">Logout</span>
          </div>
        )}
      </button>
    </div>
  );
}