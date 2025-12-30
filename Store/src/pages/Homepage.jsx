import CategorySection from "../components/categories/CategorySection";
import Feature from "../components/products/Feature";
import ProductsSection from "../components/products/ProductsSection";
import TopTrendingProducts from "../ui/TopTrendingProducts";

import ProjectBanner from "../components/products/ProjectBanner";
import Footer from "../ui/Footer";
import Hero from "../components/layout/Hero";
import DealsBanner from "../ui/DealsBanner";

function Homepage() {
  return (
    <>
      <Hero />
      <main className="mx-auto mt-6 w-full flex-1 px-4 md:mt-12 md:max-w-[1500px]">
        <CategorySection />
        <DealsBanner />
        <TopTrendingProducts />
        <Feature />
        <ProductsSection />
        <ProjectBanner />
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
