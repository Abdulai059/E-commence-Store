import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import StockBadge from "../../ui/StockBadge";

function ProductDetails({ products }) {
  const product = products?.[0];

  if (!product) return <p>Loading...</p>;

  // Handle images (array of objects or strings)
  const imageUrls =
    product.images?.map((img) => (typeof img === "string" ? img : img.image_url)) || [];
  const [thumbnail, setThumbnail] = useState(imageUrls[0] || "");

  const {
    name,
    category,
    price,
    offer_price,
    rating,
    description,
    trending_colors = [],
    stock_quantity,
    // in_stock,
  } = product;

  // Determine stock status
  const in_stock = product.stock_quantity > 0;

  // Handle description as string or array
  const descriptionText =
    typeof description === "string"
      ? description
      : Array.isArray(description)
        ? description.join(", ")
        : "No description available";

  return (
    <div className="text-accent">
      <div className="px-2">
        <p>
          <span>Home</span> / <span>Products</span> / <span>{category?.name || category}</span> /
          <span className="text-indigo-500"> {name}</span>
        </p>

        <div className="mt-4 flex flex-col gap-16 md:flex-row">
          {/* Thumbnails and main image */}
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

          {/* Product info */}
          <div className="w-full text-sm md:w-1/2">
            <h1 className="mb-4 text-3xl font-medium">{name}</h1>

            {/* Price */}
            <div className="mt-6 rounded-lg bg-red-50 p-4">
              <p className="text-gray-500/70 line-through">MRP: {formatCurrency(price)}</p>
              <p className="text-2xl font-medium">MRP: {formatCurrency(offer_price)}</p>
              <span className="text-gray-500/70">(inclusive of all taxes)</span>
            </div>

            {/* Trending colors */}
            {trending_colors.length > 0 && (
              <div className="my-6 flex items-center gap-3">
                <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white">
                  Trending
                </span>
                <span className="text-gray-700">Color: {trending_colors.join(", ")}</span>
              </div>
            )}

            {/* Stock status */}
            <StockBadge inStock={in_stock} />

            {/* Description */}
            <p className="mt-6 text-base font-medium">About Product</p>
            <div className="ml-4 text-gray-500/70">{descriptionText}</div>

            {/* Buttons */}
            <div className="mt-10 flex items-center gap-4 text-base">
              <button className="w-full cursor-pointer bg-gray-100 py-3.5 font-medium text-gray-800/80 transition hover:bg-gray-200">
                Add to Cart
              </button>
              <button className="w-full cursor-pointer bg-indigo-500 py-3.5 font-medium text-white transition hover:bg-indigo-600">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
