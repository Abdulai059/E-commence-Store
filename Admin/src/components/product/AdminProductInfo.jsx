import ProductColors from "../ui/ProdectColors";
import ProductPrice from "../ui/ProductPrice";
import StockBadge from "../ui/StockBadge";
import { ActionButtons } from "./ActionButtons";

function AdminProductInfo({ product, onAddToCart, addToCartText, buyNowText }) {
  const { name, price, offer_price, description, trending_colors = [], stock_quantity } = product;
  const inStock = stock_quantity > 0;

  const descriptionText =
    typeof description === "string"
      ? description
      : Array.isArray(description)
        ? description.join(", ")
        : "No description available";

  return (
    <div className="w-full px-2 text-sm md:w-1/2">
      <h1 className="mb-4 text-xl font-medium md:text-3xl">{name}</h1>

      <ProductPrice price={price} offerPrice={offer_price} />

      <ProductColors colors={trending_colors} />

      <StockBadge inStock={inStock} />

      <p className="mt-6 text-base font-medium">About Product</p>
      <div className="text-gray-500/70">{descriptionText}</div>

      <ActionButtons
        product={product}
        onAddToCart={onAddToCart}
        addToCartText={addToCartText}
        buyNowText={buyNowText}
      />
    </div>
  );
}

export default AdminProductInfo;
