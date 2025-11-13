import React, { useState } from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';

function ProductFeature() {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Classic White Crew-Neck",
      price: 29.00,
      image: "/SAMSUNG-75.png",
      category: "T-Shirts",
      badge: "New"
    },
    {
      id: 2,
      name: "Premium Cotton Tee",
      price: 39.00,
      image: "/aircon.webp",
      category: "T-Shirts",
      badge: "Popular"
    },
    {
      id: 3,
      name: "Modern Fit Shirt",
      price: 29.00,
      image: "/nasco-blendeer.webp",
      category: "Shirts",
      badge: null
    },
    {
      id: 4,
      name: "Designer Collection Tee",
      price: 49.00,
      image: "/NASCO-DF.jpg",
      category: "T-Shirts",
      badge: "Sale"
    },
  
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const getBadgeColor = (badge) => {
    switch(badge) {
      case "New": return "bg-blue-500";
      case "Popular": return "bg-purple-500";
      case "Sale": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-medium text-slate-800 mb-3 tracking-tight">
            New Arrivals
          </h1>
          <p className="text-slate-600 text-base">
            Explore the latest additions to our collection
          </p>
          {cart.length > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
              <ShoppingCart size={18} />
              <span className="font-medium">{cart.length} items in cart</span>
            </div>
          )}
        </div>

        {/* Product Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Badge */}
              {product.badge && (
                <div className={`absolute top-4 left-4 ${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-xs font-semibold z-10`}>
                  {product.badge}
                </div>
              )}

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform"
              >
                <Heart
                  size={20}
                  className={favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-slate-400"}
                />
              </button>

              {/* Image */}
              <div className="relative overflow-hidden h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-white text-slate-800 px-6 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 hover:bg-slate-800 hover:text-white">
                    <Eye size={18} />
                    Quick View
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-base font-medium text-slate-800 mt-1 mb-3">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <p className="text-xl font-semibold text-slate-900">
                    ${product.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2 group/btn"
                  >
                    <ShoppingCart size={18} className="group-hover/btn:scale-110 transition-transform" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <button className="bg-slate-800 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-700 transition-colors shadow-lg hover:shadow-xl">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductFeature;