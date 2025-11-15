import Home from "../../pages/Home";
import Product from "../../pages/Product";
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
      <main className="mx-auto max-w-[1500px] overflow-y-auto">
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
