function ProductDetailsSkeleton() {
  return (
    <div className="max-w-[1500px] animate-pulse px-2">
      <div className="mb-6 h-4 w-1/3 rounded bg-gray-300"></div>

      <div className="mt-4 flex flex-col gap-16 md:flex-row">
        {/* Image Section */}
        <div className="flex gap-3">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-20 w-20 rounded border border-gray-300 bg-gray-300"></div>
            ))}
          </div>

          {/* Main Image */}
          <div className="h-80 w-80 rounded border border-gray-300 bg-gray-300"></div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <div className="mb-4 h-6 w-2/3 rounded bg-gray-300"></div>

          <div className="mb-4 h-20 w-full rounded bg-gray-300"></div>

          <div className="my-6 h-5 w-1/3 rounded bg-gray-300"></div>

          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-gray-300"></div>
            <div className="h-4 w-4/5 rounded bg-gray-300"></div>
            <div className="h-4 w-3/5 rounded bg-gray-300"></div>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-12 w-full rounded bg-gray-300"></div>
            <div className="h-12 w-full rounded bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsSkeleton;
