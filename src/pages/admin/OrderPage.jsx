import { useOrdersPage } from "../../components/admin/order/useOrdersPage";
import { OrdersTable } from "../../components/admin/order/OrdersTable";
import { OrderModal } from "../../components/admin/order/OrderModal";
import { useOrders } from "../../AdminServices/orders/useOrder";
import Stats from "../../components/admin/order/Stats";
import OrderFilters from "../../components/admin/order/OrderFilters";

const OrdersPage = () => {
  const { isLoading, error, orders } = useOrders();

  console.log(orders);

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
      pending: "bg-yellow-100 text-yellow-800",
      processing: "bg-blue-100 text-blue-800",
      shipped: "bg-purple-100 text-purple-800",
      delivered: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800",
    };
    return colors[status.toLowerCase()] || "bg-gray-100 text-gray-800";
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
        orders={orders}
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
