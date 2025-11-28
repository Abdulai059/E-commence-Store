import AdminSidebar from "../../components/admin/AdminSidebar";
import AddProducts from "./AddProducts";
import AllProducts from "./AllProducts";

function AdminDashboard() {
  return (
    <div className="flex">
      <AdminSidebar />

      <AllProducts />
      <AddProducts />
    </div>
  );
}

export default AdminDashboard;
