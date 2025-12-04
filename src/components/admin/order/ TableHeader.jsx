const headers = ["Order", "Product Summary", "Amount", "Payment", "Status", "Date", "Actions"];

const TableHeader = () => {
  return (
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
  );
};

export default TableHeader;
