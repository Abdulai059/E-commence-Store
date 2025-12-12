import AdminProductDetails from "../../components/admin/product/AdminProductDetails";
import { useProduct } from "../../components/client/products/useProduct";
import ProductDetailsSkeleton from "../../components/client/skeletons/ProductDetailsSkeleton";
import ShippingDetailsSkeleton from "../../components/client/skeletons/ShippingDetailsSkeleton";
import NotFoundPage from "../../ui/NotFoundPage";

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
