import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { PAGE_SIZE, ORDER_PAGE_SIZE } from "../../utils/constants";
import ShowingResults from "./ShowingResults";
import { usePagination } from "../../hooks/usePagination";

function Pagination({ count, pageSize = 7 }) {
  const { currentPage, pageCount, nextPage, previousPage } = usePagination(count, pageSize);

  if (pageCount <= 1) return null;

  return (
    <div className="mt-6 flex w-full items-center justify-between">
      <ShowingResults
        currentPage={currentPage}
        pageCount={pageCount}
        pageSize={pageSize} // <-- pass actual page size
        count={count}
      />

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md font-medium transition ${currentPage === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-red-600 text-white hover:bg-red-700"}`}
        >
          <HiChevronLeft className="inline w-5 h-5" /> Previous
        </button>

        <span className="font-medium">
          Page {currentPage} of {pageCount}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className={`px-4 py-2 rounded-md font-medium transition ${currentPage === pageCount ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-red-600 text-white hover:bg-red-700"}`}
        >
          Next <HiChevronRight className="inline w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
