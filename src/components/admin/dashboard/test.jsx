function test() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Orders</h1>

        {/* Search and Filters */}
        <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
          <div className="flex flex-wrap gap-4">
            <div className="min-w-[250px] flex-1">
              <div className="relative">
                <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by order ID or customer name..."
                  className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  value={""}
                  onChange={() => {}}
                />
              </div>
            </div>

            <select
              className="rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              value={""}
              onChange={() => {}}
            >
              <option value="All">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>

            <select
              className="rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              value={""}
              onChange={() => {}}
            >
              <option value="All">All Payments</option>
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
            </select>

            <button className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700">
              <Download className="h-4 w-4" />
              Export
            </button>
          </div>
        </div>

        {/* Stats Cards */}

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="mb-1 text-sm text-gray-600">{title}</p>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
              </div>
              <div className={`${color} rounded-lg p-3`}>{icon}</div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="mb-1 text-sm text-gray-600">{title}</p>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
              </div>
              <div className={`${color} rounded-lg p-3`}>{icon}</div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="mb-1 text-sm text-gray-600">{title}</p>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
              </div>
              <div className={`${color} rounded-lg p-3`}>{icon}</div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="mb-1 text-sm text-gray-600">{title}</p>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
              </div>
              <div className={`${color} rounded-lg p-3`}>{icon}</div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="mb-1 text-sm text-gray-600">{title}</p>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
              </div>
              <div className={`${color} rounded-lg p-3`}>{icon}</div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="mb-1 text-sm text-gray-600">{title}</p>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
              </div>
              <div className={`${color} rounded-lg p-3`}>{icon}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-hidden rounded-lg bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                {headers.map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-[12px] font-medium tracking-wider text-gray-500 uppercase"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 bg-white">
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
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <Pagination count={count} />
    </div>
  );
}

export default test;
