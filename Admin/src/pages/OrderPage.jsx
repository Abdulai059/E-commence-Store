import { OrdersTable } from "../components/order/OrdersTable";
import { useOrders } from "../api/orders/useOrder";
import Stats from "../components/order/Stats";
import OrderFilters from "../components/order/OrderFilters";
import OrdersPageSkeleton from "../components/skeleton/OrdersPageSkeleton";

function OrdersPage() {
  const { isLoading, error, orders, count } = useOrders();
  console.log(orders);

  // const { selectedOrder, setSelectedOrder } = useOrdersPage();

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
        <Stats />
      </div>

      {/* Orders Table */}
      {isLoading ? (
        <OrdersPageSkeleton />
      ) : error ? (
        <div className="text-red-500">Error loading orders</div>
      ) : (
        <OrdersTable
          orders={orders}
          count={count}
          getStatusColor={getStatusColor}
          getPaymentColor={getPaymentColor}
        />
      )}
    </div>
  );
}

export default OrdersPage;
