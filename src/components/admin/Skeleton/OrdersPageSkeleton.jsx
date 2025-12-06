export default function OrdersPageSkeleton() {
  return (
    <div className="min-h-screen animate-pulse bg-gray-50 p-6">
      {/* Orders Table */}
      <div className="overflow-hidden rounded-lg bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                {[...Array(6)].map((_, i) => (
                  <th key={i} className="px-6 py-3 text-left text-[12px] font-medium uppercase">
                    <div className="h-3 w-16 rounded bg-gray-300"></div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 bg-white">
              {[...Array(5)].map((_, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="h-4 w-24 rounded bg-gray-300"></div>
                    <div className="mt-1 h-3 w-20 rounded bg-gray-200"></div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded bg-gray-300"></div>
                      <div className="h-4 w-28 rounded bg-gray-200"></div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="h-4 w-16 rounded bg-gray-300"></div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="h-5 w-20 rounded-full bg-gray-200"></div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="h-5 w-20 rounded-full bg-gray-200"></div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="h-4 w-24 rounded bg-gray-200"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <div className="h-10 w-full rounded bg-gray-200"></div>
      </div>
    </div>
  );
}
