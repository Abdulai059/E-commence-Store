function TableSkeleton({ columns }) {
  // Number of placeholder rows
  const rows = 8;

  return (
    <div className="max-w-8xl flex w-full flex-col overflow-hidden rounded-md border border-gray-300 bg-white animate-pulse">
      <table className="w-full table-auto">
        <thead className="bg-gray-50 text-left text-sm text-gray-600">
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className={`px-4 py-3 font-semibold uppercase ${
                  col.hideOnMobile ? "hidden md:table-cell" : ""
                }`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {[...Array(rows)].map((_, i) => (
            <tr key={i} className="border-t">
              
              {/* PRODUCT CELL */}
              <td className="flex items-center gap-3 px-4 py-3">
                <div className="h-16 w-16 rounded border border-gray-200 bg-gray-200"></div>

                <div className="h-4 w-32 rounded bg-gray-200"></div>
              </td>

              {/* CATEGORY */}
              <td className="px-4 py-3">
                <div className="h-4 w-20 rounded bg-gray-200"></div>
              </td>

              {/* PRICE */}
              <td className="hidden px-4 py-3 md:table-cell">
                <div className="h-4 w-16 rounded bg-gray-200"></div>
              </td>

              {/* OFFER PRICE */}
              <td className="hidden px-4 py-3 md:table-cell">
                <div className="h-4 w-16 rounded bg-gray-200"></div>
              </td>

              {/* DESCRIPTION */}
              <td className="px-4 py-3">
                <div className="h-4 w-40 rounded bg-gray-200"></div>
              </td>

              {/* STOCK QUANTITY */}
              <td className="px-4 py-3">
                <div className="h-4 w-10 rounded bg-gray-200"></div>
              </td>

              {/* TOGGLE */}
              <td className="px-4 py-3">
                <div className="h-6 w-12 rounded bg-gray-200"></div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableSkeleton;
