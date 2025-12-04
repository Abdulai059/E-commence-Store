function CategoryTableSkeleton({ columns }) {
  const rows = 8;

  return (
    <>
      {/* HEADER */}
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

      {/* BODY */}
      <tbody className="animate-pulse">
        {Array.from({ length: rows }).map((_, i) => (
          <tr key={i} className="border-t">
            {/* IMAGE CELL */}
            <td className="px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="h-16 w-16 rounded border border-gray-200 bg-gray-200"></div>
                <div className="h-4 w-32 rounded bg-gray-200"></div>
              </div>
            </td>

            {/* COLUMN 2 */}
            <td className="px-4 py-3">
              <div className="h-4 w-20 rounded bg-gray-200"></div>
            </td>

            {/* COLUMN 3 */}
            <td className="hidden px-4 py-3 md:table-cell">
              <div className="h-4 w-16 rounded bg-gray-200"></div>
            </td>

            {/* COLUMN 4 */}
            <td className="hidden px-4 py-3 md:table-cell">
              <div className="h-4 w-16 rounded bg-gray-200"></div>
            </td>

            {/* COLUMN 5 */}
            <td className="px-4 py-3">
              <div className="h-4 w-40 rounded bg-gray-200"></div>
            </td>

            {/* COLUMN 6 */}
            <td className="px-4 py-3">
              <div className="h-4 w-10 rounded bg-gray-200"></div>
            </td>

            {/* ACTION BUTTON */}
            <td className="px-4 py-3">
              <div className="h-6 w-12 rounded bg-gray-200"></div>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default CategoryTableSkeleton;
