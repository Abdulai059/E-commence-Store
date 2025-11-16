import { Heart, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";

function ProductCard({ product }) {
  const [favorites, setFavorites] = useState([]);

  // Destructure the product
  const { name, price, category, images } = product;

  // Optional: get the first image
  const mainImage = images[0]?.image_url;

  const toggleFavorite = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]));
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "New":
        return "bg-blue-500";
      case "Popular":
        return "bg-purple-500";
      case "Sale":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-2xl md:w-64">
      {/* Badge */}
      {product.badge && (
        <div
          className={`absolute top-4 left-4 z-10 rounded-full px-3 py-1 text-xs font-semibold text-white ${getBadgeColor(product.badge)}`}
        >
          {product.badge}
        </div>
      )}

      {/* Favorite Button */}
      <button
        onClick={() => toggleFavorite(product.id)}
        className="absolute top-4 right-4 z-10 rounded-full bg-white p-2 shadow-md transition-transform duration-200 hover:scale-110"
      >
        <Heart
          size={20}
          className={
            favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-slate-400"
          }
        />
      </button>

      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={mainImage}
          alt={name}
          className="md:h-64 md:w-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className="bg-opacity-0 group-hover:bg-opacity-20 absolute inset-0 flex items-center justify-center transition-all duration-300">
          <button className="flex transform items-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-medium text-slate-800 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-slate-800 hover:text-white">
            <Eye size={18} />
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <span className="text-xs font-medium tracking-wider text-slate-500 uppercase">
          {category?.name}
        </span>
        <h3 className="mt-1 mb-3 text-base font-medium">{name}</h3>

        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-red-500">{formatCurrency(price)}</p>

          {/* Optional Add to Cart button */}
          {/* 
      <button className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-white transition-colors hover:bg-slate-700">
        <ShoppingCart size={18} className="transition-transform group-hover:scale-110" />
        Add
      </button>
      */}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
