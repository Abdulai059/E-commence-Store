import SectionHeader from "../../ui/SectionHeader";
import ProductCard from "./ProductCard";

import { useProducts } from "./useProduct";

function ProductFeature() {
  const { isLoading, products } = useProducts();

  return (
    <div className="max-w-8xl mx-auto px-4 py-12">
      {/* Header with View All */}
      <SectionHeader
        title="New Arrival"
        subtitle="Browse our selection of high-quality refrigerators"
        viewAllLink="/new-arrivals"
      />

      {/* Product Grid */}
      <ProductGrid products={products || []} />
    </div>
  );
}

export default ProductFeature;

export function ProductGrid({ products }) {
  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
