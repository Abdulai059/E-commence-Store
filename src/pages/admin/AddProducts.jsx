import AddProductTable from "../../components/admin/product/AddProductTable";
import { useCategories } from "../../components/client/categories/useCategories";
import { useAllProducts } from "../../hooks/admin/useAllProducts";

function AddProducts() {
  const { isLoading, products, count } = useAllProducts();
  const { isLoading2, categories, error } = useCategories();

  const isDataLoading = isLoading || isLoading2;

  if (error) return <p className="text-red-500">Failed to load categories: {error.message}</p>;

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start p-4">
      <AddProductTable isLoading={isDataLoading} products={products} categories={categories} />
    </div>
  );
}

export default AddProducts;
