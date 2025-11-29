import TableSkeleton from "../../AdminServices/Skeleton/TableSkeleton";
import TableHeader from "../../ui/TableHeader";
import { Snippet } from "@heroui/snippet";

const columns = [
  { label: "Product", key: "product" },
  { label: "Category", key: "category" },
  { label: "ProductId", key: "productid" },
];

function AddProductTable({ isLoading, products }) {
  console.log(products);

  return (
    <div className="flex w-5xl flex-col overflow-hidden rounded-md border border-gray-300 bg-white">
      <table className="w-5xl table-auto">
        {isLoading ? (
          <TableSkeleton columns={columns} />
        ) : (
          <>
            <TableHeader columns={columns} />
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
                    <td className="hidden px-4 py-3 font-medium md:table-cell">
                      <Snippet size="lg" symbol="" hideCopyButton={false}>
                        {product.id}
                      </Snippet>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </>
        )}
      </table>
    </div>
  );
}

export default AddProductTable;
