import { useState } from "react";
import StockBadge from "../../ui/StockBadge";
import ProductColors from "../../ui/ProdectColors";
import ProductPrice from "../../ui/ProductPrice";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

function ProductDetails({ product }) {
  const dispatch = useDispatch();
  if (!product) return <p>Loading...</p>;

  // Extract image URLs
  const imageUrls =
    product.images?.map((img) => (typeof img === "string" ? img : img.image_url)) || [];

  const [thumbnail, setThumbnail] = useState(imageUrls[0] || "");

  const {
    name,
    category,
    price,
    offer_price,
    description,
    trending_colors = [],
    stock_quantity,
  } = product;

  // Determine stock status
  const in_stock = stock_quantity > 0;

  function handleAddToCart() {
    const newItem = {
      productId: product.id,
      name: product.name,
      unitPrice: product.price,
      quantity: 1,
      image: imageUrls[0],
      offer_price: product.price,
    };
    dispatch(addItem(newItem));
  }

  // Normalize description
  const descriptionText =
    typeof description === "string"
      ? description
      : Array.isArray(description)
        ? description.join(", ")
        : "No description available";

  return (
    <div className="text-accent">
      <div className="px-2">
        <p className="text-base">
          <span>{category?.name || category}</span>:<span className="text-indigo-500"> {name}</span>
        </p>

        <div className="mt-4 flex flex-col gap-16 md:flex-row">
          {/* Images Section */}
          <div className="flex gap-3">
            <div className="flex flex-col gap-3">
              {imageUrls.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setThumbnail(image)}
                  className="max-w-30 cursor-pointer overflow-hidden rounded border border-gray-500/30"
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>

            <div className="max-w-100 overflow-hidden rounded border border-gray-500/30 md:max-w-150">
              <img
                src={thumbnail || imageUrls[0]}
                alt="Selected product"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="w-full px-2 text-sm md:w-1/2">
            <h1 className="mb-4 text-xl font-medium md:text-3xl">{name}</h1>

            <ProductPrice price={price} offerPrice={offer_price} />

            <ProductColors colors={trending_colors} />

            <StockBadge inStock={in_stock} />

            <p className="mt-6 text-base font-medium">About Product</p>
            <div className="ml-4 text-gray-500/70">{descriptionText}</div>

            <div className="mt-10 flex items-center gap-4 text-base">
              <Link
                onClick={handleAddToCart}
                to="/cart"
                className="w-full cursor-pointer bg-gray-100 py-3.5 text-center font-medium text-gray-800/80 shadow-sm transition hover:bg-gray-200"
              >
                Add to Cart
              </Link>
              <Button className="w-full cursor-pointer bg-indigo-500 py-3.5 font-medium text-white shadow-sm transition hover:bg-indigo-600">
                Buy now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
