import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/admin/sidebar/AdminSidebar";

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
