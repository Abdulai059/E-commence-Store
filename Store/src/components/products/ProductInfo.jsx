import StockBadge from "../../ui/StockBadge";
import ProductColors from "../../ui/ProdectColors";
import ProductPrice from "../../ui/ProductPrice";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

function ProductInfo({ product, onAddToCart, addToCartText, buyNowText }) {
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

      <ProductActionButtons
        onAddToCart={onAddToCart}
        addToCartText={addToCartText}
        buyNowText={buyNowText}
      />
    </div>
  );
}

export function ProductActionButtons({
  onAddToCart,
  addToCartText = "Add to Cart",
  buyNowText = "Buy now",
}) {
  return (
    <div className="mt-10 flex items-center gap-4 text-base text-gray-800">
      <Link
        onClick={onAddToCart}
        to="/cart"
        className="w-full cursor-pointer bg-gray-100 py-3.5 text-center font-medium shadow-sm transition hover:bg-gray-200"
      >
        {addToCartText}
      </Link>
      <Button className="w-full cursor-pointer bg-indigo-500 py-3.5 font-medium text-white shadow-sm transition hover:bg-indigo-600">
        {buyNowText}
      </Button>
    </div>
  );
}

export default ProductInfo;
