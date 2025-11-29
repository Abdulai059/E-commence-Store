function TableHeader({ columns }) {
  return (
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
  );
}

export default TableHeader;
