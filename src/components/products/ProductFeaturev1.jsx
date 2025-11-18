// ============================================
// 1. ProductCard.jsx - Reusable Card Component
// ============================================
function ProductCard({ image, title, badge, description, actions }) {
  return (
    <div className="card bg-card-foreground shadow-sm">
      <figure>
        <img src={image.src} alt={image.alt || title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">
          {title}
          {badge && <div className="badge badge-secondary">{badge}</div>}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {actions.map((action, index) => (
            <div key={index} className="badge badge-outline">
              {action}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// 2. ProductGrid.jsx - Reusable Grid Component
// ============================================
function ProductGrid({ products }) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}

// ============================================
// 3. ProductFeatureSection.jsx - Full Section with Title
// ============================================
function ProductFeatureSection({ title, subtitle, products }) {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h2>
          <p className="mt-4 text-base leading-7 font-normal text-gray-600">
            {subtitle}
          </p>
        </div>
        <ProductGrid products={products} />
      </div>
    </section>
  );
}

// ============================================
// 4. Usage Examples
// ============================================

// Example 1: Use the full section component
function HomePage() {
  const featuredProducts = [
    {
      image: { src: '/SAMSUNGTV.jpg', alt: 'Samsung TV' },
      title: 'Samsung Smart TV',
      badge: 'NEW',
      description: 'Experience stunning 4K display with smart features.',
      actions: ['Electronics', 'Featured'],
    },
    {
      image: { src: '/aircon.webp', alt: 'Air Conditioner' },
      title: 'Air Conditioner',
      badge: 'HOT',
      description: 'Cool your space efficiently with this modern AC unit.',
      actions: ['Appliances', 'Deals'],
    },
    {
      image: { src: '/nasco-blendeer.webp', alt: 'Blender' },
      title: 'Nasco Blender',
      badge: 'SALE',
      description: 'Powerful blender for all your kitchen needs.',
      actions: ['Kitchen', 'Trending'],
    },
    {
      image: { src: 'deepfridzer.jpg', alt: 'Deep Freezer' },
      title: 'Deep Freezer',
      badge: 'HOT',
      description: 'Large capacity freezer for your storage needs.',
      actions: ['Appliances', 'Popular'],
    },
  ];

  return (
    <ProductFeatureSection
      title="Our featured items"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus."
      products={featuredProducts}
    />
  );
}

// Example 2: Use just the grid in another page
function DealsPage() {
  const dealProducts = [
    {
      image: { src: '/product1.jpg' },
      title: 'Deal Product 1',
      badge: 'SALE',
      description: 'Amazing deal on this product.',
      actions: ['50% OFF', 'Limited'],
    },
    // ... more products
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">Today's Deals</h1>
      <ProductGrid products={dealProducts} />
    </div>
  );
}

// Example 3: Use individual cards
function CustomSection() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <ProductCard
        image={{ src: '/product.jpg' }}
        title="Single Product"
        badge="NEW"
        description="This is a single product card."
        actions={['Tag1', 'Tag2']}
      />
    </div>
  );
}

// ============================================
// 5. Export all components
// ============================================
export { ProductCard, ProductGrid, ProductFeatureSection };