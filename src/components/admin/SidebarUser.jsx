import { LogOut } from "lucide-react";

function SidebarUser({ isCollapsed }) {
  return (
    <div className="border-t border-slate-700 p-4">
      <div
        className={`flex items-center gap-3 rounded-lg bg-slate-700/30 px-3 py-3 ${isCollapsed ? "justify-center" : ""}`}
      >
        {!isCollapsed ? (
          <>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-sm font-bold">
              AD
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">Admin User</p>
              <p className="truncate text-xs text-slate-400">admin@pressmart.com</p>
            </div>
          </>
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-sm font-bold">
            AD
          </div>
        )}
      </div>

      <button
        className={`group mt-2 flex w-full items-center gap-3 rounded-lg px-3 py-3 text-red-400 transition-all duration-200 hover:bg-red-500/20 hover:text-red-300 ${
          isCollapsed ? "justify-center" : ""
        }`}
      >
        <LogOut className="h-5 w-5 flex-shrink-0" />
        {!isCollapsed && <span className="text-sm font-medium">Logout</span>}
      </button>
    </div>
  );
}


export default SidebarUser;
