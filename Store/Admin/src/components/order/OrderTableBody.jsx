import { formatCurrency, formatDatePretty } from "../../utils/helpers";
import OrdersTableRow from "./OrdersTableRow";

function OrderTableBody({ order, getStatusColor, getPaymentColor, selectedOrder }) {
  const {
    order_id,
    recipient_name,
    total_amount,
    payment_method,
    order_status,
    payment_status,
    created_at: orderDate,
    order_items,
  } = order;

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

      <OrdersTableRow order={order} />
    </tr>
  );
}

export default OrderTableBody;
