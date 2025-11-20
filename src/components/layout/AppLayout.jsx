import { Outlet } from "react-router-dom";
import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import Hero from "./Hero";

function AppLayout() {
  return (
    <>
      <Header />
      <Hero />
      <main className="mx-auto flex-1 overflow-auto px-4 md:max-w-[1500px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
