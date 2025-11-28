import AdminSidebar from "../../components/admin/AdminSidebar"
import AllProducts from "./AllProducts"


function AdminDashboard() {
  return (

    <div className="flex">
     <AdminSidebar/>

     <AllProducts/>
    </div>
   
  )
}

export default AdminDashboard