import { Eye } from "lucide-react";
import TableHeader from "./ TableHeader";
import { formatCurrency, formatDatePretty } from "../../../utils/helpers";
import Pagination from "../../../ui/Pagination";

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

export function OrderTableBody({
  order: {
    order_id,
    recipient_name,
    total_amount,
    payment_method,
    order_status,
    payment_status,
    created_at: orderDate,
    order_items, // keep as array
  },
  onViewOrder,
  getStatusColor,
  getPaymentColor,
}) {
  return (
    <tr key={order_id} className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{order_id}</div>
        <div className="text-sm text-gray-500">{recipient_name}</div>
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <img
            src={order_items[0]?.product_image}
            alt={order_items[0]?.product_name}
            className="h-10 w-10 rounded object-cover"
          />
          <span className="text-sm text-gray-600">
            {order_items[0]?.product_name}
            {order_items.length > 1 && ` + ${order_items.length - 1} more`}
          </span>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-semibold text-gray-900">
          {formatCurrency(total_amount?.toFixed(2))}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs leading-5 font-semibold ${getPaymentColor(
            payment_status,
          )}`}
        >
          {payment_status}
        </span>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs leading-5 font-semibold ${getStatusColor(
            order_status,
          )}`}
        >
          {order_status}
        </span>
      </td>

      <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
        {formatDatePretty(orderDate)}
      </td>

      <td className="px-6 py-4 text-sm whitespace-nowrap">
        <button
          onClick={() =>
            onViewOrder({
              order_id,
              recipient_name,
              total_amount,
              payment_method,
              order_status,
              order_items,
            })
          }
          className="flex items-center gap-1 text-blue-600 hover:text-blue-900"
        >
          <Eye className="h-4 w-4" />
          View
        </button>
      </td>
    </tr>
  );
}
