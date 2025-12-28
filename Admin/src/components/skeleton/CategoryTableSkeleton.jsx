function CategoryTableSkeleton({ columns }) {
  const rows = 8;

  return (
    <table className="w-8xl table-auto">
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

      <tbody className="animate-pulse text-sm text-gray-700">
        {Array.from({ length: rows }).map((_, i) => (
          <tr key={i} className="border-t">
            <td className="px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="h-16 w-16 rounded border border-gray-200 bg-gray-200"></div>
                <div className="h-4 w-40 rounded bg-gray-200"></div>
              </div>
            </td>

            <td className="px-4 py-3">
              <div className="h-4 w-32 rounded bg-gray-200"></div>
            </td>

            <td className="px-4 py-3">
              <div className="h-4 w-48 rounded bg-gray-200"></div>
            </td>

            <td className="hidden px-4 py-3 md:table-cell">
              <div className="h-6 w-36 rounded bg-gray-200"></div>
            </td>

            <td className="px-4 py-3">
              <div className="h-8 w-44 rounded bg-gray-200"></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CategoryTableSkeleton;
