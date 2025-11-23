import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { usePagination } from "../../hooks/usePagination";
import { PAGE_SIZE } from "../../utils/constants";

function DashboardNavbar({ count }) {
  const [sortOption, setSortOption] = useState("Newest First");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sortOptions = [
    "Newest First",
    "Price: Low to High",
    "Price: High to Low",
    "Most Popular",
    "Best Rating",
  ];

  const { currentPage, pageCount, nextPage, previousPage } = usePagination(count);

  const handleSortChange = (option) => {
    setSortOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="rounded-2 w-full rounded-xl border-b border-gray-200 bg-white px-6 py-3 shadow-sm">
      <div className="mx-auto flex items-start justify-between">
        {/* Left Section - Brand Info */}
        <div>
          <h1 className="mb-1 text-xl font-semibold text-gray-900">Samsung</h1>
          <p className="text-base text-gray-500">Discover amazing products from this brand</p>
        </div>

        {/* Right Section - Product Count & Sort */}
        <div className="flex items-center gap-6">
          <div className="rounded-3xl bg-red-100 px-5 py-2 text-sm">
            <span className="font-semibold text-red-600">{(currentPage - 1) * PAGE_SIZE + 1}</span>{" "}
            to{" "}
            <span className="font-semibold text-red-600">
              {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
            </span>{" "}
            <span className="text-gray-600"> products</span>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 transition-colors hover:border-gray-400"
            >
              <svg
                className="h-4 w-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
              <span className="text-sm font-medium text-gray-700">{sortOption}</span>
              <ChevronDown
                className={`h-4 w-4 text-gray-600 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 z-10 mt-2 w-56 rounded-lg border border-gray-200 bg-white shadow-lg">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSortChange(option)}
                    className={`w-full px-4 py-3 text-left text-sm transition-colors first:rounded-t-lg last:rounded-b-lg hover:bg-gray-50 ${
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

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div className="fixed inset-0 z-0" onClick={() => setIsDropdownOpen(false)} />
      )}
    </div>
  );
}

export default DashboardNavbar;
