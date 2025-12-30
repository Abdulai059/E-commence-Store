import { ProjectGrid } from "../../ui/ProductGrid";
import SectionHeader from "../../ui/SectionHeader";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";
import { useProducts } from "./useProducts";

function ProductsSection() {
  const { isLoading, products } = useProducts();

  return (
    <div className="my-10 md:py-12">
      <SectionHeader
        title="New Arrival"
        subtitle="Browse our selection of high-quality refrigerators"
        viewAllLink="/new-arrivals"
      />

      {isLoading ? (
        <ProjectGrid
          data={Array.from({ length: 14 }, (_, index) => ({ id: index }))}
          renderItem={(item) => <ProductCardSkeleton key={item.id} />}
          className="gap-6 md:grid-cols-4 lg:grid-cols-6"
        />
      ) : (
        <ProjectGrid
          data={products}
          renderItem={(product) => <ProductCard key={product.id} product={product} />}
          className="gap-4 md:grid-cols-4 lg:grid-cols-6"
        />
      )}
    </div>
  );
}

export default ProductsSection;
