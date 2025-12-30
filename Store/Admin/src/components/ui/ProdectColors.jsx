function ProductColors({ colors = [], label = "Trending" }) {
const safeColors = colors || [];


  return (
   <div className="my-6 flex items-center gap-3">
      <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white">
        {label}
      </span>
      <span className="text-gray-700">
        {safeColors.length > 0 ? `Color: ${safeColors.join(", ")}` : "No colors available"}
      </span>
    </div>
  );
}


export default ProductColors