import { Store } from "lucide-react";

function SidebarLogo({ isCollapsed }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-700 p-6">
      {!isCollapsed ? (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
            <Store className="h-6 w-6" />
          </div>

          <div className="text-gray-800">
            <h1 className="text-lg font-semibold">Pressmart</h1>
            <p className="text-xs ">Admin Pane</p>
          </div>
        </div>
      ) : (
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
          <Store className="h-6 w-6" />
        </div>
      )}
    </div>
  );
}
export default SidebarLogo