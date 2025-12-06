export default function OrderDetailsSkeleton() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto flex w-full max-w-5xl animate-pulse flex-col">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
          <div className="h-6 w-48 rounded bg-gray-300"></div>
          <div className="h-6 w-6 rounded-full bg-gray-300"></div>
        </div>

        <div className="p-6">
          {/* Customer Info */}
          <div className="mb-6 rounded-lg bg-gray-50 p-4">
            <div className="mb-3 h-5 w-56 rounded bg-gray-300"></div>

            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i}>
                  <div className="mb-1 h-4 w-20 rounded bg-gray-300"></div>
                  <div className="h-4 w-40 rounded bg-gray-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Items Table */}
          <div className="mb-6">
            <div className="mb-3 h-5 w-40 rounded bg-gray-300"></div>

            <table className="w-full overflow-hidden rounded-lg border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3">
                    <div className="h-3 w-20 rounded bg-gray-300"></div>
                  </th>
                  <th className="px-4 py-3">
                    <div className="h-3 w-10 rounded bg-gray-300"></div>
                  </th>
                  <th className="px-4 py-3">
                    <div className="h-3 w-14 rounded bg-gray-300"></div>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {[1, 2].map((i) => (
                  <tr key={i}>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded bg-gray-300"></div>
                        <div className="h-4 w-32 rounded bg-gray-300"></div>
                      </div>
                    </td>

                    <td className="px-4 py-3">
                      <div className="h-4 w-8 rounded bg-gray-300"></div>
                    </td>

                    <td className="px-4 py-3">
                      <div className="h-4 w-16 rounded bg-gray-300"></div>
                    </td>
                  </tr>
                ))}

                <tr className="bg-gray-50">
                  <td colSpan="3" className="px-4 py-3 text-right">
                    <div className="ml-auto h-4 w-20 rounded bg-gray-300"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Admin Actions */}
          <div className="rounded-lg bg-gray-50 p-4">
            <div className="mb-3 h-5 w-40 rounded bg-gray-200"></div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="mb-2 h-4 w-32 rounded bg-gray-200"></div>
                <div className="h-10 w-full rounded bg-gray-200"></div>
              </div>

              <div className="flex items-end gap-2">
                <div className="h-10 w-full rounded bg-gray-300"></div>
                <div className="h-10 w-full rounded bg-gray-300"></div>
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-2 h-4 w-40 rounded bg-gray-200"></div>
              <div className="h-20 w-full rounded bg-gray-200"></div>
            </div>

            <div className="mt-4 flex gap-2">
              <div className="h-10 w-full rounded bg-gray-300"></div>
              <div className="h-10 w-full rounded bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
