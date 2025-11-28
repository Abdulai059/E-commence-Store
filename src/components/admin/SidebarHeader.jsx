import { ShoppingCart } from "lucide-react";

export default function SidebarHeader({ isCollapsed }) {
  return (
    <div className="flex items-center justify-between border-b p-6">
      {!isCollapsed && (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
            <ShoppingCart className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold">Pressmart</h1>
            <p className="text-xs text-gray-800">Admin Panel</p>
          </div>
        </div>
      )}

      {isCollapsed && (
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
          <ShoppingCart className="h-6 w-6 text-white" />
        </div>
      )}
    </div>
  );
}
