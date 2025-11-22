import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // current page from the url
  const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function previousPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="mt-6 flex w-full items-center justify-between">
   
      <p className="ml-2 text-base">
        showing <span className="font-semibold">{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span className="font-semibold">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span className="font-semibold">{count}</span> results
      </p>

    
      <div className="flex gap-2">
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
          className={`flex items-center gap-1 rounded-md px-4 py-2 text-base font-medium transition ${
            currentPage === 1
              ? "cursor-not-allowed bg-gray-100 text-gray-400"
              : "bg-blue-600 text-white hover:bg-blue-700"
          } `}
        >
          <HiChevronLeft className="h-5 w-5" />
          <span>Previous</span>
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className={`flex items-center gap-1 rounded-md px-4 py-2 text-base font-medium transition ${
            currentPage === pageCount
              ? "cursor-not-allowed bg-gray-100 text-gray-400"
              : "bg-blue-600 text-white hover:bg-blue-700"
          } `}
        >
          <HiChevronRight className="h-5 w-5" />
          <span>Next</span>
        </button>
      </div>
    </div>
  );
}

export default Pagination;
