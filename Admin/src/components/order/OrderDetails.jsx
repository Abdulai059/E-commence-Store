import { CheckCircle, Clock, Printer, X } from "lucide-react";
import { useOrder } from "./useOrder";
import OrderDetailsSkeleton from "../skeleton/OrderDetailsSkeleton";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { Link } from "react-router-dom";

function OrderDetails({ onClose }) {
  const { order, isLoading, error } = useOrder();
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  if (isLoading) return <OrderDetailsSkeleton />;
  if (error || !order) return <p>Order not found</p>;

  const {
    order_id,
    recipient_name,
    recipient_email,
    recipient_contact,
    delivery_address,
    total_amount,
    order_items = [],
    payment_status,
    order_status,
    timeline = [],
  } = order;

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto flex w-full max-w-5xl flex-col">
        <div className="p-6">
          <div ref={contentRef}>
            <div className="sticky top-0 my-4 flex items-center justify-between border-b border-gray-200 bg-white px-6">
              <h2 className="text-2xl font-bold text-gray-900">Order Details - {order_id}</h2>
            </div>

            {/* --- Customer Info*/}
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

            {/* --- Items Ordered  */}
            <div className="mb-6">
              <h3 className="mb-3 px-6 text-lg font-semibold text-gray-900">Items Ordered</h3>

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
                  {order_items.map((item, idx) => (
                    <tr key={idx}>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.product_image}
                            alt={item.product_name}
                            className="h-12 w-12 rounded object-cover"
                          />
                          <span className="text-sm font-medium text-gray-900">
                            {item.product_name}
                          </span>
                        </div>
                      </td>

                      <td className="px-4 py-3 text-sm text-gray-900">{item.quantity}</td>

                      <td className="px-4 py-3 text-sm text-gray-900">GHS {item.unit_price}</td>

                      <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                        GHS {item.unit_price * item.quantity}
                      </td>
                    </tr>
                  ))}

                  <tr className="bg-gray-50">
                    <td colSpan="3" className="px-4 py-3 text-right font-semibold text-gray-900">
                      Total:
                    </td>
                    <td className="px-4 py-3 text-sm font-bold text-gray-900">
                      GHS {order?.total_amount}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Order Timeline */}
            <div className="flex flex-col gap-4 px-6">
              {timeline?.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      item.done ? "bg-green-100" : "bg-gray-100"
                    }`}
                  >
                    {item.done ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <Clock className="h-5 w-5 text-gray-400" />
                    )}
                  </div>

                  <div className="flex-1">
                    <p
                      className={`text-sm font-medium ${
                        item.done ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {item.status}
                    </p>
                    {item.date && <p className="text-xs text-gray-500">{item.date}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex gap-2 px-6">
            <button
              onClick={reactToPrintFn}
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              <Printer className="h-4 w-4" />
              Print Invoice
            </button>
            <Link
              to="driver"
              className="rounded-lg bg-gray-100 px-4 py-2 text-white hover:bg-gray-200"
            >
              Assign Driver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
