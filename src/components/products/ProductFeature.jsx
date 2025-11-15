import ProductCard from './ProductCard';

import { useProducts } from './useProduct';

function ProductFeature() {
  const { isLoading, products } = useProducts();

  return (
    <div className="max-w-8xl mx-auto px-4 py-12">
      {/* Header with View All */}
      <div className="mb-2 flex items-center justify-between pb-2">
        {/* Left side - Title with underline */}
        <div className="relative pb-2">
          <h2 className="text-2xl font-semibold text-gray-900">New Arrival</h2>
          <div className="absolute bottom-6 left-43 h-1 w-6xl border-b border-gray-300"></div>

          {/* Red underline accent */}
          <div className="absolute bottom-0 left-0 h-1 w-20 bg-red-600"></div>
        </div>

        {/* Right side - View All link */}
        <a
          href="#"
          className="flex items-center gap-2 font-medium transition-colors hover:text-red-700"
        >
          <span className="text-red-600">View All</span>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Optional description */}
      <p className="mb-10 text-base text-slate-600">
        Browse our selection of high-quality refrigerators
      </p>

      {/* Product Grid */}
      <ProductGrid products={products || []} />
    </div>
  );
}

export default ProductFeature;

export function ProductGrid({ products }) {
  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
