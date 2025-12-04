import { useOrdersPage } from "../../components/admin/order/useOrdersPage";
import { OrdersTable } from "../../components/admin/order/OrdersTable";
import { OrderModal } from "../../components/admin/order/OrderModal";
import { useOrders } from "../../AdminServices/orders/useOrder";
import Stats from "../../components/admin/order/Stats";
import OrderFilters from "../../components/admin/order/OrderFilters";

// ============================================
// OrdersPage.jsx - Main Page Component
// ============================================
const OrdersPage = () => {
  // Sample orders data
  // const ordersnew = [
  //   {
  //     id: "#ORD-584930",
  //     customer: { name: "Kwame Mensah", email: "kwame@email.com", avatar: "KM" },
  //     products: [
  //       { name: "Wireless Headphones", image: "🎧", price: 150, qty: 1 },
  //       { name: "Phone Case", image: "📱", price: 45, qty: 2 },
  //       { name: "USB Cable", image: "🔌", price: 25, qty: 3 },
  //     ],
  //     amount: 420.0,
  //     paymentStatus: "Paid",
  //     orderStatus: "Pending",
  //     date: "2025-04-01",
  //     phone: "+233 24 123 4567",
  //     address: "123 Oxford Street, Osu, Accra",
  //     timeline: [
  //       { status: "Created", date: "2025-04-01 10:30 AM", done: true },
  //       { status: "Payment Confirmed", date: "2025-04-01 10:35 AM", done: true },
  //       { status: "Packed", date: "", done: false },
  //       { status: "Shipped", date: "", done: false },
  //       { status: "Delivered", date: "", done: false },
  //     ],
  //   },
  //   {
  //     id: "#ORD-584929",
  //     customer: { name: "Ama Osei", email: "ama@email.com", avatar: "AO" },
  //     products: [{ name: "Smart Watch", image: "⌚", price: 280, qty: 1 }],
  //     amount: 280.0,
  //     paymentStatus: "Unpaid",
  //     orderStatus: "Processing",
  //     date: "2025-03-31",
  //     phone: "+233 20 987 6543",
  //     address: "45 Cantonments Road, Accra",
  //     timeline: [
  //       { status: "Created", date: "2025-03-31 02:15 PM", done: true },
  //       { status: "Payment Confirmed", date: "", done: false },
  //       { status: "Packed", date: "", done: false },
  //       { status: "Shipped", date: "", done: false },
  //       { status: "Delivered", date: "", done: false },
  //     ],
  //   },
  //   {
  //     id: "#ORD-584928",
  //     customer: { name: "Kofi Adjei", email: "kofi@email.com", avatar: "KA" },
  //     products: [
  //       { name: "Laptop Bag", image: "💼", price: 95, qty: 1 },
  //       { name: "Mouse", image: "🖱️", price: 35, qty: 1 },
  //     ],
  //     amount: 130.0,
  //     paymentStatus: "Paid",
  //     orderStatus: "Delivered",
  //     date: "2025-03-29",
  //     phone: "+233 55 246 8101",
  //     address: "78 Spintex Road, Tema",
  //     timeline: [
  //       { status: "Created", date: "2025-03-29 09:00 AM", done: true },
  //       { status: "Payment Confirmed", date: "2025-03-29 09:05 AM", done: true },
  //       { status: "Packed", date: "2025-03-29 11:30 AM", done: true },
  //       { status: "Shipped", date: "2025-03-30 08:00 AM", done: true },
  //       { status: "Delivered", date: "2025-03-30 04:30 PM", done: true },
  //     ],
  //   },
  //   {
  //     id: "#ORD-584927",
  //     customer: { name: "Abena Owusu", email: "abena@email.com", avatar: "AO" },
  //     products: [{ name: "Bluetooth Speaker", image: "🔊", price: 180, qty: 2 }],
  //     amount: 360.0,
  //     paymentStatus: "Paid",
  //     orderStatus: "Cancelled",
  //     date: "2025-03-28",
  //     phone: "+233 26 789 0123",
  //     address: "12 East Legon, Accra",
  //     timeline: [
  //       { status: "Created", date: "2025-03-28 03:45 PM", done: true },
  //       { status: "Payment Confirmed", date: "2025-03-28 03:50 PM", done: true },
  //       { status: "Cancelled", date: "2025-03-28 05:20 PM", done: true },
  //     ],
  //   },
  // ];

  const { isLoading, error, orders } = useOrders();

  const {
    selectedOrder,
    setSelectedOrder,
    currentPage,
    setCurrentPage,
    rowsPerPage,
    setRowsPerPage,
    filteredOrders,
    paginatedOrders,
    totalPages,
    startIndex,
  } = useOrdersPage();

  const getStatusColor = (status) => {
    const colors = {
      Pending: "bg-yellow-100 text-yellow-800",
      Processing: "bg-blue-100 text-blue-800",
      Shipped: "bg-purple-100 text-purple-800",
      Delivered: "bg-green-100 text-green-800",
      Cancelled: "bg-red-100 text-red-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const getPaymentColor = (status) => {
    return status === "Paid" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Orders</h1>

        {/* Search and Filters */}
        <OrderFilters />

        {/* Stats Cards */}
        <Stats orders={orders} />
      </div>

      {/* Orders Table */}
      <OrdersTable
        paginatedOrders={paginatedOrders}
        onViewOrder={setSelectedOrder}
        getStatusColor={getStatusColor}
        getPaymentColor={getPaymentColor}
        filteredOrders={filteredOrders}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        startIndex={startIndex}
        totalPages={totalPages}
      />

      {/* Order Details Modal */}
      <OrderModal selectedOrder={selectedOrder} onClose={() => setSelectedOrder(null)} />
    </div>
  );
};

export default OrdersPage;
