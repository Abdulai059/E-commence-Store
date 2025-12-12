import NotFoundPage from "../../../ui/NotFoundPage";
import ProductDetails from "../../client/products/ProductDetails";
import { useProduct } from "../../client/products/useProduct";
import ProductDetailsSkeleton from "../../client/skeletons/ProductDetailsSkeleton";
import ShippingDetailsSkeleton from "../../client/skeletons/ShippingDetailsSkeleton";

function ProductDetail() {
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
    </div>
  );
}

export default ProductDetail;
