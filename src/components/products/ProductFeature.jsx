import { Heart, ShoppingCart, Eye } from 'lucide-react';
import ProductCard from './ProductCard';
import { useState } from 'react';

function ProductFeature({ products }) {
  const [cart, setCart] = useState([]);

  return (
    <div className="px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-3xl font-medium tracking-tight text-slate-800">New Arrivals</h1>
          <p className="text-base text-slate-600">Explore the latest additions to our collection</p>
          {cart.length > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700">
              <ShoppingCart size={18} />
              <span className="font-medium">{cart.length} items in cart</span>
            </div>
          )}
        </div>

        {/* Product Grid */}
        <ProductGrid products={products} />

        {/* Additional Info */}
        <div className="mt-16 hidden text-center">
          <button className="rounded-full bg-slate-800 px-8 py-3 font-medium text-white shadow-lg transition-colors hover:bg-slate-700 hover:shadow-xl">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductFeature;

export function ProductGrid({ products }) {
  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </section>
  );
}
