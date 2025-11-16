import CarouselSection from "../../ui/CarouselSection";
import ProductCard from "./ProductCard";
import { useProducts } from "./useProduct";

function ProductsSection() {
  const { isLoading, products } = useProducts();

  return (
    <div className="mx-auto px-4 md:py-12">
      <CarouselSection
        title="New Arrival"
        subtitle="Browse our selection of high-quality refrigerators"
        viewAllLink="/new-arrivals"
        items={products}
        mobileCols="w-full"
        desktopCols="lg:grid-cols-4"
        showArrows= {false}
        renderItem={(product) => <ProductCard product={product} />}
      />
    </div>
  );
}

export default ProductsSection;

