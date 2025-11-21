import { Check } from "lucide-react";

function StockBadge({ inStock }) {
  return (
    <div
      className={`mb-4 inline-flex items-center gap-2 rounded-lg px-4 py-2 ${
        inStock ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
      }`}
    >
      {inStock && <Check className="h-5 w-5" />}
      <span className="font-medium">{inStock ? "In Stock" : "Out of Stock"}</span>
    </div>
  );
}

export default StockBadge;
