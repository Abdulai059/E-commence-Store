import { ProjectGrid } from "../../ui/ProductGrid";
import SectionHeader from "../../ui/SectionHeader";
import ProductCard from "./ProductCard";
import { useProducts } from "./useProduct";

function ProductsSection() {
  const { isLoading, products } = useProducts();

  return (
    <div className="md:py-12">
      <SectionHeader
        title="New Arrival"
        subtitle="Browse our selection of high-quality refrigerators"
        viewAllLink="/new-arrivals"
      />

      <ProjectGrid data={products} renderItem={(product) => <ProductCard product={product} />} />
      {/* <ProjectGrid/> */}
    </div>
  );
}

export default ProductsSection;
