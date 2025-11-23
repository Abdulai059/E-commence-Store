import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import Sidebar from "../components/dashboard/Sidebar";
import ProductCard from "../components/products/ProductCard";
import { useProducts } from "../components/products/useProducts";
import Pagination from "../ui/Pagination";
import { ProjectGrid } from "../ui/ProductGrid";

function Shop() {
  const { isLoading, products, count } = useProducts();
  return (
    <div className="flex md:pt-5 min-h-screen flex-col md:mt-[130px]">
      {/* GRID LAYOUT */}
      <div className="grid flex-1 grid-cols-1 md:grid-cols-[85px_1fr]">
        {/* SIDEBAR */}
        <div className="w-full border-r border-gray-300 pt-4 md:w-85">
          <Sidebar />
        </div>
        {/* MAIN */}
        <div className="flex-1 pr-2 pl-0 md:pl-80">
          <DashboardNavbar count={count} />
          <div className="mt-10">
            <ProjectGrid
              data={products}
              renderItem={(product) => <ProductCard product={product} />}
              getKey={(product) => product.id}
              className="gap-8 md:grid-cols-5"
            />
            <div className="flex justify-center bg-gray-50 p-5 empty:hidden">
              <Pagination count={count} />
            </div>
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
