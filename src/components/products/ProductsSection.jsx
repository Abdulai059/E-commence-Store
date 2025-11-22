import { ProjectGrid } from "../../ui/ProductGrid";
import SectionHeader from "../../ui/SectionHeader";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";
import { useProducts } from "./useProducts";

function ProductsSection() {
  const { isLoading, products } = useProducts();

  return (
    <div className="md:py-12">
      <SectionHeader
        title="New Arrival"
        subtitle="Browse our selection of high-quality refrigerators"
        viewAllLink="/new-arrivals"
      />

      {isLoading ? (
        <ProjectGrid
          data={Array.from({ length: 14 }, (_, index) => ({ id: index }))}
          renderItem={(item) => <ProductCardSkeleton key={item.id} />}
        />
      ) : (
        <ProjectGrid
          data={products}
          renderItem={(product) => <ProductCard key={product.id} product={product} />}
        />
      )}
    </div>
  );
}

export default ProductsSection;
