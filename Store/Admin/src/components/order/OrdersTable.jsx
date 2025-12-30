import TableHeader from "./ TableHeader";
import Pagination from "../ui/Pagination";
import OrderTableBody from "./OrderTableBody";

export function OrdersTable({ orders = [], count, onViewOrder, getStatusColor, getPaymentColor }) {
  console.log(orders);

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <TableHeader />

          <tbody className="divide-y divide-gray-200 bg-white">
            {orders.map((order) => (
              <OrderTableBody
                key={order.order_id}
                order={order}
                onViewOrder={onViewOrder}
                getStatusColor={getStatusColor}
                getPaymentColor={getPaymentColor}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination count={count} />
    </div>
  );
}
