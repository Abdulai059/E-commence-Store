function ShippingDetailsSkeleton() {
  return (
    <div className="mx-auto max-w-full px-2 py-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="flex animate-pulse items-center gap-3 rounded-lg px-2 py-6 shadow-sm"
          >
            {/* Icon skeleton */}
            <div className="h-6 w-6 rounded bg-gray-300 md:h-10 md:w-10" />

            <div className="flex-1 space-y-2">
              {/* Title skeleton */}
              <div className="h-3 w-20 rounded bg-gray-300 md:w-24" />
              {/* Description skeleton */}
              <div className="h-2 w-16 rounded bg-gray-200 md:w-20" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShippingDetailsSkeleton;
