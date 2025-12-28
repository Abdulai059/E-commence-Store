import AdminProductDetails from "../components/product/AdminProductDetails";
import { useProduct } from "../hooks/useProduct";
import ProductDetailsSkeleton from "../components/skeleton/ProductDetailsSkeleton";
import ShippingDetailsSkeleton from "../components/skeleton/ShippingDetailsSkeleton";
import NotFoundPage from "../components/ui/NotFoundPage";

function AdminProductPage() {
  const { isLoading, product, error } = useProduct();
  if (isLoading) {
    return (
      <div className="mx-auto w-full max-w-7xl pt-9 md:pt-[200px]">
        <ProductDetailsSkeleton />
        <ShippingDetailsSkeleton />
      </div>
    );
  }

  if (error || !product) {
    return <NotFoundPage />;
  }

  return (
    <div className="mx-auto w-full max-w-7xl pt-9 md:pt-[200px]">
      <AdminProductDetails product={product} />
    </div>
  );
}

export default AdminProductPage;
