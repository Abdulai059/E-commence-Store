import { Printer, Clock, CheckCircle, X } from "lucide-react";
export const OrderModal = ({ selectedOrder, onClose }) => {
  if (!selectedOrder) return null;

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white">
        <div className="sticky top-0 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-900">Order Details - {selectedOrder.id}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Customer Information */}
          <div className="mb-6 rounded-lg bg-gray-50 p-4">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Customer Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Name</p>
                <p className="text-sm font-medium text-gray-900">{selectedOrder.customer.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="text-sm font-medium text-gray-900">{selectedOrder.customer.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="text-sm font-medium text-gray-900">{selectedOrder.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Delivery Address</p>
                <p className="text-sm font-medium text-gray-900">{selectedOrder.address}</p>
              </div>
            </div>
          </div>

          {/* Items Ordered */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Items Ordered</h3>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="w-full">
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
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {selectedOrder.products.map((product, idx) => (
                    <tr key={idx}>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{product.image}</span>
                          <span className="text-sm font-medium text-gray-900">{product.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">{product.qty}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        GHS {product.price.toFixed(2)}
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                        GHS {(product.price * product.qty).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50">
                    <td colSpan="3" className="px-4 py-3 text-right font-semibold text-gray-900">
                      Total:
                    </td>
                    <td className="px-4 py-3 text-sm font-bold text-gray-900">
                      GHS {selectedOrder.amount.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Order Timeline */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Order Timeline</h3>
            <div className="space-y-4">
              {selectedOrder.timeline.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${item.done ? "bg-green-100" : "bg-gray-100"}`}
                  >
                    {item.done ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <Clock className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p
                      className={`text-sm font-medium ${item.done ? "text-gray-900" : "text-gray-500"}`}
                    >
                      {item.status}
                    </p>
                    {item.date && <p className="text-xs text-gray-500">{item.date}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Admin Actions */}
          <div className="rounded-lg bg-blue-50 p-4">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Admin Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Change Order Status
                </label>
                <select className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500">
                  <option>Pending</option>
                  <option>Processing</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                  <option>Cancelled</option>
                </select>
              </div>
              <div className="flex items-end gap-2">
                <button className="flex-1 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700">
                  Mark as Paid
                </button>
                <button className="flex-1 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700">
                  Cancel Order
                </button>
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Add Note for Delivery
              </label>
              <textarea
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="Enter delivery notes..."
              ></textarea>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                <Printer className="h-4 w-4" />
                Print Invoice
              </button>
              <button className="rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-700">
                Assign Driver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
