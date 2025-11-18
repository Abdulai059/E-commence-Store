import CarouselSection from "../../ui/CarouselSection";
import { ProjectGrid } from "../../ui/ProductGrid";
import SectionHeader from "../../ui/SectionHeader";
import { useProducts } from "./useProduct";

function ProductsSection() {


  return (
    <div className="md:py-12">
      <SectionHeader
        title="New Arrival"
        subtitle="Browse our selection of high-quality refrigerators"
        viewAllLink="/new-arrivals"
      />

      <ProjectGrid />
      {/* <ProjectGrid/> */}
    </div>
  );
}

export default ProductsSection;

{
  /* <CarouselSection
        title="New Arrival"
        subtitle="Browse our selection of high-quality refrigerators"
        viewAllLink="/new-arrivals"
        items={products}
        mobileCols="grid-cols-2"
        desktopCols="lg:grid-cols-5"
        showArrows={false}
        renderItem={(product) => <ProductCard product={product} />}
      /> */
}
