import DashboardNavbar from "../components/ShopSidebar/DashboardNavbar";
import Sidebar from "../components/ShopSidebar/Sidebar";
import ProductCard from "../components/products/ProductCard";
import { useProducts } from "../components/products/useProducts";
import ProductCardSkeleton from "../components/skeletons/ProductCardSkeleton";
import Pagination from "../ui/Pagination";
import { ProjectGrid } from "../ui/ProductGrid";

function Shop() {
  const { isLoading, products, count } = useProducts();

  return (
    <div className="flex min-h-screen flex-col md:mt-[100px] md:pt-2">
      <div className="grid flex-1 grid-cols-1 md:grid-cols-[85px_1fr]">
        {/* SIDEBAR */}
        <div className="w-full border-r border-gray-300 pt-4 md:w-85">
          <Sidebar />
        </div>

        {/* MAIN */}
        <div className="flex-1 pr-2 pl-0 md:pl-70">
          <DashboardNavbar count={count} />

          <div className="mt-10">
            {isLoading ? (
              <ProjectGrid
                data={Array.from({ length: 8 }, (_, index) => ({ id: index }))}
                renderItem={(item) => <ProductCardSkeleton key={item.id} />}
                className="gap-6 md:grid-cols-4 lg:grid-cols-6"
              />
            ) : (
              <ProjectGrid
                data={products}
                renderItem={(product) => <ProductCard product={product} />}
                getKey={(product) => product.id}
                className="gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
              />
            )}

            <div className="flex justify-center bg-gray-50 p-0 empty:hidden">
              <Pagination count={count} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
