import { Grid } from "../../ui/Grid";
import SectionHeader from "../../ui/SectionHeader";
import ProductCard from "./ProductCard";

import { useProducts } from "./useProduct";

function ProductsSection() {
  const { isLoading, products } = useProducts();

  return (
    <div className="mx-auto px-4 py-12">
      {/* Header with View All */}
      <SectionHeader
        title="New Arrival"
        subtitle="Browse our selection of high-quality refrigerators"
        viewAllLink="/new-arrivals"
      />

      {/* Product Grid */}
      <Grid>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </div>
  );
}

export default ProductsSection;

