import CategorySection from "../components/categories/CategorySection";
import Feature from "../components/products/Feature";
import ProductsSection from "../components/products/ProductsSection";
import TopTrendingProducts from "../ui/TopTrendingProducts";

import ProjectBanner from "../components/products/ProjectBanner";
import Footer from "../ui/Footer";
import Hero from "../components/layout/Hero";

function Homepage() {
  return (
    <>
      <Hero />
      <main className="mx-auto mt-6 md:mt-12 flex-1 px-4 md:max-w-[1500px] w-full">
        <CategorySection />
        <TopTrendingProducts />
        <Feature />
        <ProductsSection />
        <ProjectBanner />
        <Footer />
      </main>
    </>
  );
}

export default Homepage;
