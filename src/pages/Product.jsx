import { useState } from "react";
import ShippingDetails from "../ui/ShippingDetails";
import ProductDetails from "../components/products/ProductDetails";
import { useProducts } from "../components/products/useProduct";

function Product() {
  const { isLoading, products } = useProducts();

  return (
    <div className="mx-auto w-full max-w-7xl pt-9 md:pt-[200px]">
      <ProductDetails products={products} />
      <ShippingDetails  />
    </div>
  );
}

export default Product;
