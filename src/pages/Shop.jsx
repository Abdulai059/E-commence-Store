import Sidebar from "../components/ dashboard/      Sidebar";
import DashboardNavbar from "../components/ dashboard/DashboardNavbar";
import ProductCard from "../components/products/ProductCard";
import { useProducts } from "../components/products/useProducts";
import { ProjectGrid } from "../ui/ProductGrid";

function Shop() {
  const { isLoading, products } = useProducts();

  return (
    <div className="flex min-h-screen flex-col md:mt-[125px]">
      {/* BELOW NAVBAR → STACK ON MOBILE, ROW ON DESKTOP */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* SIDEBAR */}
        <div className="w-full border-r border-gray-300 pt-4 md:w-80">
          <Sidebar />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 pr-2 pl-10">
          <DashboardNavbar />

          <div className="mt-10">
            <ProjectGrid
              data={products}
              renderItem={(product) => <ProductCard key={product.id} product={product} />}
              className="md:grid-cols-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;

{
  /* <div className="flex items-center justify-between border-b mt-[125px] border-gray-300 bg-white px-4 py-3 transition-all duration-300 md:px-8">
        <a href="https://prebuiltui.com">
          <img
            className="h-9"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
            alt="dummyLogoColored"
          />
        </a>
        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          <button className="rounded-full border px-4 py-1 text-sm">Logout</button>
        </div>
      </div> */
}
