import ShippingDetails from "../../ui/ShippingDetails";
import ProductDetails from "../../components/client/products/ProductDetails";
import { useProduct } from "../../components/client/products/useProduct";
import ProductDetailsSkeleton from "../../components/client/skeletons/ProductDetailsSkeleton";
import ShippingDetailsSkeleton from "../../components/client/skeletons/ShippingDetailsSkeleton";
import NotFoundPage from "../../ui/NotFoundPage";

function ProductPage() {
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
      <ProductDetails product={product} />
      <ShippingDetails />
    </div>
  );
}

export default ProductPage;
