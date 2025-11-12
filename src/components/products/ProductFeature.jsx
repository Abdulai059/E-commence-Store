function ProductFeature({ products }) {
  return (
    <section className="bg-white py-12 sm:py-0 md;py-0 lg-0">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Our featured items</h2>
          <p className="mt-4 text-base leading-7 font-normal text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim
            tempus.
          </p>
        </div>
        <ProductGrid products={products} />
      </div>
    </section>
  );
}

export default ProductFeature;

export function ProductGrid({ products }) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

// export function ProductCard({ product }) {
//   return (
//     <div className="card bg-card-foreground shadow-sm">
//       <figure>
//         <img src={product.image.src} alt={product.image.alt} />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title text-xl font-medium">
//           {product.title}
//           <div className="badge badge-secondary">{product.badge}</div>
//         </h2>
//         FeaturedItems
//         <p>{product.description}</p>
//         <div className="card-actions justify-end">
//           {product.actions.map((action, index) => (
//             <div key={index} className="badge badge-outline">
//               {action}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export function ProductCard({ product }) {
  return (
    <div className="card bg-card-foreground shadow-sm">
      <figure>
        <img src={product.image.src} alt={product.image.alt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-medium">
          {product.title} <div className="badge text-sm bg-primary px-3 rounded-3xl">{product.badge}</div>
        </h2>
        FeaturedItems <p>{product.description}</p>
        <div className="card-actions justify-end">
          {product.actions.map((action, index) => (
            <div key={index} className="badge badge-outline">
              {action}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
