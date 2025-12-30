import AddProductTable from "../components/product/AddProductTable";
import { useCategories } from "../hooks/useCategories";

import { useAllProducts } from "../hooks/useAllProducts";

function Categories() {
  const { isLoading, products, count } = useAllProducts();
  const { isLoading2, categories } = useCategories();

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <AddProductTable isLoading={isLoading} products={products} categories={categories} />
    </div>
  );
}

export default Categories;
