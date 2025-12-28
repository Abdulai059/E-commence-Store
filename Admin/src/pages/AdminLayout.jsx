import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/sidebar/AdminSidebar";

function AdminDashboard() {
  return (
    <div className="flex">
      <AdminSidebar />

      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminDashboard;
