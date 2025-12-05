import { X } from "lucide-react";

function OrderDetails({ order, onClose }) {
  if (!order) return null;

  const {
    order_id,
    recipient_name,
    recipient_email,
    recipient_contact,
    delivery_address,
    total_amount,
    order_items,
    payment_status,
    order_status,
    timeline,
    created_at,
  } = order;

  return (
    <>
      <div className="sticky top-0 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-900">Order Details - {order_id}</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700"></button>
      </div>

      <div className="p-6">
        {/* --- Customer Info --- */}
        <div className="mb-6 rounded-lg bg-gray-50 p-4">
          <h3 className="mb-3 text-lg font-semibold text-gray-900">Customer Information</h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Name</p>
              <p className="text-sm font-medium text-gray-900">{recipient_name}</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-sm font-medium text-gray-900">{recipient_email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <p className="text-sm font-medium text-gray-900">{recipient_contact}</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Delivery Address</p>
              <p className="text-sm font-medium text-gray-900">{delivery_address}</p>
            </div>
          </div>
        </div>

        {/* --- Items Ordered (single item for now) --- */}
        <div className="mb-6">
          <h3 className="mb-3 text-lg font-semibold text-gray-900">Items Ordered</h3>

          <table className="w-full overflow-hidden rounded-lg border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Product
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Qty
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Price
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3">{order_items[0]?.product_name}</td>
                <td className="px-4 py-3">{order_items[0]?.quantity}</td>
                <td className="px-4 py-3">GHS {total_amount}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* --- Timeline --- */}
        <div className="mb-6">
          {Array.isArray(timeline) &&
            timeline.map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gray-500" />
                <p>{step.status}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default OrderDetails;
