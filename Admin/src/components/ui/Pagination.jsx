import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { PAGE_SIZE, ORDER_PAGE_SIZE } from "../../utils/constants";
import ShowingResults from "./ShowingResults";
import { usePagination } from "../../hooks/usePagination";

function Pagination({ count }) {
  const { currentPage, pageCount, nextPage, previousPage } = usePagination(count);

  if (pageCount <= 1) return null;

  return (
    <div className="mt-6 flex w-full items-center justify-between">
      <ShowingResults
        currentPage={currentPage}
        pageCount={pageCount}
        PAGE_SIZE={PAGE_SIZE}
        ORDER_PAGE_SIZE={ORDER_PAGE_SIZE}
        count={count}
      />

      <div className="flex gap-15 pl-8 md:gap-2">
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
          className={`flex items-center gap-1 rounded-md px-4 py-2 text-base font-medium transition ${
            currentPage === 1
              ? "cursor-not-allowed bg-gray-100 text-gray-400"
              : "bg-red-600 text-white hover:bg-red-700"
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
              : "bg-red-600 text-white hover:bg-red-700"
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
