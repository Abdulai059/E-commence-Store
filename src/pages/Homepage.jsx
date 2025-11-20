import CategorySection from "../components/categories/CategorySection";
import Feature from "../components/products/Feature";
import ProductsSection from "../components/products/ProductsSection";
import TopTrendingProducts from "../ui/TopTrendingProducts";

import ProjectBanner from "../components/products/ProjectBanner";

function Homepage() {
  return (
    <>
      <CategorySection />
      <TopTrendingProducts />
      <Feature />
      <ProductsSection />
      <ProjectBanner />
    </>
  );
}

export default Homepage;
