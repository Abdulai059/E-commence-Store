import TableSkeleton from "../components/skeleton/TableSkeleton";
import { useAllProducts } from "../hooks/useAllProducts";
import Pagination from "../components/ui/Pagination";
import Table from "../components/ui/Table";

function AllProducts() {
  const ITEMS_PER_PAGE = 7;
  const { isLoading, products, count } = useAllProducts(ITEMS_PER_PAGE);

  const columns = [
    { label: "Product", key: "product" },
    { label: "Category", key: "category" },
    { label: "Price", key: "description" },
    { label: "Selling Price", key: "offerPrice", hideOnMobile: true },
    { label: "Description", key: "inStock" },
    { label: "Stock Quantity", key: "stockQty" },
    { label: "In Stock", key: "inStock" },
    { label: "Add & Edit", key: "addedit" },
  ];

  return (
    <div className="flex flex-1 flex-col items-center justify-between px-20 py-8">
      <div className="w-8xl p-4 md:p-0">
        <h2 className="pb-4 text-lg font-medium">All Products</h2>
        {isLoading ? (
          <TableSkeleton columns={columns} />
        ) : (
          <>
            <div className="overflow-x-auto">
              <Table products={products} columns={columns} />
            </div>
            <div className="mt-4 flex justify-center">
              <Pagination count={count} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AllProducts;
