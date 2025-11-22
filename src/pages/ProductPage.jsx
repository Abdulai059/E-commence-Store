import ShippingDetails from "../ui/ShippingDetails";
import ProductDetails from "../components/products/ProductDetails";
import { useProduct } from "../components/products/useProduct";

function ProductPage() {
  const { isLoading, product, error } = useProduct();

  if (isLoading) {
    return (
      <div className="mx-auto w-full max-w-7xl pt-9 md:pt-[200px]">
        <p>Loading product...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="mx-auto w-full max-w-7xl pt-9 md:pt-[200px]">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl pt-9 md:pt-[200px]">
      <ProductDetails product={product} />
      <ShippingDetails />
    </div>
  );
}

export default ProductPage;
