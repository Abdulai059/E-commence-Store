import { SlidersHorizontal, Tag } from "lucide-react";
import { useState } from "react";
import Button from "../../ui/Button";

const BRANDS = ["Asano fridge", "Franko fridge"];
const DEFAULT_MIN_PRICE = "0";
const DEFAULT_MAX_PRICE = "200000";

export default function Sidebar() {
  const [minPrice, setMinPrice] = useState(DEFAULT_MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(DEFAULT_MAX_PRICE);

  const [appliedMin, setAppliedMin] = useState(DEFAULT_MIN_PRICE);
  const [appliedMax, setAppliedMax] = useState(DEFAULT_MAX_PRICE);

  const [discountedOnly, setDiscountedOnly] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const applyPriceFilter = () => {
    setAppliedMin(minPrice);
    setAppliedMax(maxPrice);
  };

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  const resetAll = () => {
    setMinPrice(DEFAULT_MIN_PRICE);
    setMaxPrice(DEFAULT_MAX_PRICE);
    setAppliedMin(DEFAULT_MIN_PRICE);
    setAppliedMax(DEFAULT_MAX_PRICE);
    setDiscountedOnly(false);
    setSelectedBrands([]);
  };

  return (
    <div className="space-y-6 rounded-lg bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center gap-6 border-b border-gray-200 pb-4 pl-4">
        <SlidersHorizontal className="h-5 w-5 text-red-600" />
        <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
      </div>

      {/* Price Filter */}
      <PriceRangeFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        appliedMin={appliedMin}
        appliedMax={appliedMax}
        onMinChange={setMinPrice}
        onMaxChange={setMaxPrice}
        onApply={applyPriceFilter}
      />

      {/* Discount Toggle */}
      <DiscountToggle isActive={discountedOnly} onToggle={() => setDiscountedOnly((s) => !s)} />

      {/* Brand Filter */}
      <BrandFilter brands={BRANDS} selectedBrands={selectedBrands} onToggleBrand={toggleBrand} />

      {/* Reset Button */}
      <Button className="w-full" onClick={resetAll}>
        Reset All Filters
      </Button>
    </div>
  );
}

/* --------------------- PRICE RANGE ---------------------- */

function PriceRangeFilter({
  minPrice,
  maxPrice,
  appliedMin,
  appliedMax,
  onMinChange,
  onMaxChange,
  onApply,
}) {
  return (
    <div className="space-y-4 rounded-lg bg-white p-4">
      <h3 className="mb-3 font-semibold text-gray-700">Price Range</h3>

      <div className="grid grid-cols-2 gap-3">
        <PriceInput label="Min Price" value={minPrice} onChange={onMinChange} />
        <PriceInput label="Max Price" value={maxPrice} onChange={onMaxChange} />
      </div>

      <Button variation="success" onClick={onApply}>
        Apply Price Filter
      </Button>

      <div className="flex items-center justify-between pt-2 text-sm">
        <span className="font-medium text-gray-700">Applied Range:</span>
        <span className="font-semibold text-gray-900">
          ₵{appliedMin} - ₵{appliedMax}
        </span>
      </div>
    </div>
  );
}

function PriceInput({ label, value, onChange }) {
  return (
    <div>
      <label className="mb-1 block text-xs text-gray-600">{label}</label>
      <div className="relative">
        <span className="absolute top-1/2 left-3 -translate-y-1/2 text-sm text-gray-500">₵</span>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-md border border-gray-300 py-2 pr-3 pl-7 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>
    </div>
  );
}

/* -------------------- DISCOUNT TOGGLE -------------------- */

function DiscountToggle({ isActive, onToggle }) {
  return (
    <div className="rounded-lg border border-orange-200 bg-linear-to-br from-orange-50 to-orange-100 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-orange-500 p-2">
            <Tag className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-gray-800">Discounted Items Only</span>
        </div>

        <button
          onClick={onToggle}
          className={`relative h-6 w-12 rounded-full transition-colors ${
            isActive ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-transform ${
              isActive ? "translate-x-6" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
}

/* ---------------------- BRAND FILTER ---------------------- */

function BrandFilter({ brands, selectedBrands, onToggleBrand }) {
  return (
    <div className="rounded-lg border border-green-200 bg-linear-to-br from-green-50 to-teal-50 p-4">
      <div className="mb-3 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-red-500" />
        <h3 className="font-semibold text-gray-800">Filter by Brand</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => onToggleBrand(brand)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              selectedBrands.includes(brand)
                ? "bg-gray-800 text-white"
                : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {brand}
          </button>
        ))}
      </div>
    </div>
  );
}
