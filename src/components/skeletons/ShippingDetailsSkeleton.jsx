function ShippingDetailsSkeleton() {
  return (
    <div className="animate-pulse px-2 py-8">
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="flex w-[calc(50%-12px)] flex-row items-center gap-3 rounded-lg px-2 py-6 shadow-sm md:w-auto"
          >
            <div className="h-10 w-10 rounded-full bg-gray-300"></div>

            <div>
              <div className="mb-2 h-4 w-24 rounded bg-gray-300"></div>
              <div className="h-3 w-20 rounded bg-gray-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShippingDetailsSkeleton;
