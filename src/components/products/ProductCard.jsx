import { div } from "motion/react-client";

export function ProductCard({ product }) {
  const { 
    image, 
    title, 
    price, 
    href = '#', 
    imagePosition = 'object-center' 
  } = product;

  return (
    <div>

  <a 
      href={href}
      className="group block w-full max-w-sm transition-transform duration-200 hover:scale-[1.02]"
      aria-label={`View ${title}`}
    >
      <div className="overflow-hidden rounded-lg bg-gray-100">
        <img
          className={`h-72 w-full object-cover ${imagePosition} transition-all duration-300 group-hover:scale-105`}
          src={image}
          alt={title}
          loading="lazy"
        />
      </div>
      
      <div className="mt-3 space-y-1">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-gray-600 transition-colors">
          {title}
        </h3>
        <p className="text-lg font-semibold text-gray-900">
          ${price.toFixed(2)}
        </p>
      </div>
    </a>
    </div>
  
  );
}