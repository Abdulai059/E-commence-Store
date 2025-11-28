import ToggleSwitch from "./ToggleSwitch";

function Table({ products, columns, onStockChange }) {
  console.log(products);

  return (
    <div className="max-w-8xl flex w-full flex-col overflow-hidden rounded-md border border-gray-300 bg-white">
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

        <tbody className="text-sm text-gray-700">
          {products.map((product, index) => {
            // Get main image for this product
            const mainImage =
              product.product_images?.[0]?.image_url || product.images?.[0]?.image_url || "";

            return (
              <tr key={product.id} className="border-t">
                {/** PRODUCT CELL */}
                <td className="flex items-center gap-3 px-4 py-3">
                  <div className="h-16 w-16 overflow-hidden rounded border border-gray-200">
                    <img
                      src={mainImage}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="truncate">{product.name}</span>
                </td>

                {/** CATEGORY */}
                <td className="px-4 py-3">{product.category?.name || "—"}</td>

                {/** PRICE */}
                <td className="hidden px-4 py-3 md:table-cell">${product.price}</td>

                {/** OFFER PRICE */}
                <td className="hidden px-4 py-3 md:table-cell">${product.offer_price}</td>

                {/** DESCRIPTION */}
                <td className="px-4 py-3">{product.description || "—"}</td>

                {/** STOCK QUANTITY */}
                <td className="px-4 py-3">{product.stock_quantity ?? "—"}</td>

                {/** IN-STOCK SWITCH */}
                <td className="px-4 py-3">
                  <ToggleSwitch checked={product.in_stock} onChange={() => onStockChange(index)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
