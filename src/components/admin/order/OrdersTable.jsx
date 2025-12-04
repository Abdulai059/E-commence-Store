import { Eye } from "lucide-react";
import TableHeader from "./ TableHeader";

export const OrdersTable = ({
  paginatedOrders,
  onViewOrder,
  getStatusColor,
  getPaymentColor,
  filteredOrders,
  rowsPerPage,
  setRowsPerPage,
  currentPage,
  setCurrentPage,
  startIndex,
  totalPages,
}) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <TableHeader />

          <tbody className="divide-y divide-gray-200 bg-white">
            {paginatedOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                      {order.customer.avatar}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{order.id}</div>
                      <div className="text-sm text-gray-500">{order.customer.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{order.products[0].image}</span>
                    <span className="text-sm text-gray-600">
                      {order.products[0].name}
                      {order.products.length > 1 && ` and ${order.products.length - 1} more...`}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-semibold text-gray-900">
                    GHS {order.amount.toFixed(2)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs leading-5 font-semibold ${getPaymentColor(order.paymentStatus)}`}
                  >
                    {order.paymentStatus}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs leading-5 font-semibold ${getStatusColor(order.orderStatus)}`}
                  >
                    {order.orderStatus}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{order.date}</td>
                <td className="px-6 py-4 text-sm whitespace-nowrap">
                  <button
                    onClick={() => onViewOrder(order)}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-900"
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">Rows per page:</span>
          <select
            className="rounded border border-gray-300 px-2 py-1 text-sm"
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          <span className="ml-4 text-sm text-gray-700">
            {startIndex + 1}-{Math.min(startIndex + rowsPerPage, filteredOrders.length)} of{" "}
            {filteredOrders.length}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="rounded border border-gray-300 px-3 py-1 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`rounded border px-3 py-1 ${currentPage === i + 1 ? "border-blue-600 bg-blue-600 text-white" : "border-gray-300 hover:bg-gray-50"}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="rounded border border-gray-300 px-3 py-1 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
