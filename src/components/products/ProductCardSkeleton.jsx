function ProductCardSkeleton() {
  return (
    <div className="w-full animate-pulse rounded-xl bg-white p-4 shadow-2xs">
      <div className="h-[150px] w-full rounded-lg bg-gray-300/50 sm:h-[180px] md:h-[200px] lg:h-[220px]" />

      <div className="mx-auto mt-4 h-3 w-1/3 rounded bg-gray-300/50" />

      <div className="mx-auto mt-2 h-4 w-4/5 rounded bg-gray-300/50" />

      <div className="mx-auto mt-1 h-4 w-2/5 rounded bg-gray-300/50" />
    </div>
  );
}

export default ProductCardSkeleton;

{
  /* Hover buttons placeholder */
}
{
  /* <div className="mt-2 flex justify-center gap-2">
        <div className="h-8 w-8 rounded-full bg-gray-300/50" />
        <div className="h-8 w-8 rounded-full bg-gray-300/50" />
        <div className="h-8 w-8 rounded-full bg-gray-300/50" />
      </div> */
}
