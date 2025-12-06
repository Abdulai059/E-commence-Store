import AddProductTable from "../../components/admin/product/AddProductTable";
import { useCategories } from "../../components/client/categories/useCategories";

import { useAllProducts } from "../../hooks/admin/useAllProducts";

function AddProducts() {
  const { isLoading, products, count } = useAllProducts();
  const { isLoading2, categories, error } = useCategories();

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <AddProductTable isLoading={isLoading} products={products} categories={categories} />
    </div>
  );
}

export default AddProducts;
