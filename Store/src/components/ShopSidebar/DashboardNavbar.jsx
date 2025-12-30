import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { usePagination } from "../../hooks/usePagination";
import { PAGE_SIZE } from "../../utils/constants";

const SORT_OPTIONS = [
  "Newest First",
  "Price: Low to High",
  "Price: High to Low",
  "Most Popular",
  "Best Rating",
];

export default function DashboardNavbar({ count }) {
  const [sortOption, setSortOption] = useState("Newest First");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { currentPage, pageCount } = usePagination(count);

  const handleSortChange = (option) => {
    setSortOption(option);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const closeDropdown = () => setIsDropdownOpen(false);

  const startProduct = (currentPage - 1) * PAGE_SIZE + 1;
  const endProduct = currentPage === pageCount ? count : currentPage * PAGE_SIZE;

  return (
    <div className="w-full rounded-xl border-b border-gray-200 bg-white px-4 py-3 shadow-sm">
      <div className="mx-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Brand Info */}
        <div>
          <h1 className="mb-1 text-xl font-semibold text-gray-900">Samsung</h1>
          <p className="text-base text-gray-500">Discover amazing products from this brand</p>
        </div>

        {/* Product Count & Sort */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          {/* Product Count Badge */}
          <div className="hidden rounded-3xl bg-red-100 px-4 py-2 text-center text-sm sm:text-left">
            <span className="font-semibold text-red-600">{startProduct}</span> to{" "}
            <span className="font-semibold text-red-600">{endProduct}</span>{" "}
            <span className="text-gray-600">products</span>
          </div>

          {/* Sort Dropdown */}
          <div className="relative w-full sm:w-auto">
            <button
              onClick={toggleDropdown}
              className="flex w-full items-center justify-between gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 transition-colors hover:border-gray-400 sm:w-auto"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <SortIcon />
              <span className="text-sm font-medium text-gray-700">{sortOption}</span>
              <ChevronDown
                className={`h-4 w-4 text-gray-600 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 z-10 mt-2 w-full rounded-lg border border-gray-200 bg-white shadow-lg sm:w-56">
                {SORT_OPTIONS.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSortChange(option)}
                    className={`w-full px-4 py-3 text-left text-sm transition-colors first:rounded-t-lg last:rounded-b-lg hover:bg-red-50 ${
                      sortOption === option
                        ? "bg-gray-100 font-semibold text-gray-900"
                        : "text-gray-700"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Backdrop to close dropdown */}
      {isDropdownOpen && <div className="fixed inset-0 z-0" onClick={closeDropdown} />}
    </div>
  );
}

function SortIcon() {
  return (
    <svg className="h-4 w-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h7"
      />
    </svg>
  );
}
