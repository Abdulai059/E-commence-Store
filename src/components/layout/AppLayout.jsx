import Home from "../../pages/Home";
import Product from "../../pages/Product";
import CategorySection from "../categories/CategoryList";
import Feature from "../products/Feature";
import ProjectBanner from "../products/ProjectBanner";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

function AppLayout() {
  return (
    <>
      <Header />
      <Hero />
      <main className="mx-auto max-w-[1500px] px-4 overflow-y-auto">
        <CategorySection/>
        <Home />
        <Feature />
        <Product />
        <ProjectBanner />
        <Footer />
      </main>
    </>
  );
}

export default AppLayout;
