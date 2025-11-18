import { useProducts } from "../components/products/useProduct";
import ProductCard from "../components/products/ProductCard";

export function ProjectGrid() {
  const { isLoading, products } = useProducts();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-col-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
