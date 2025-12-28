import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

export function usePagination(count) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const pageCount = Math.ceil(count / PAGE_SIZE);

  const nextPage = () => {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  };

  const previousPage = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  };

  return {
    currentPage,
    pageCount,
    nextPage,
    previousPage,
  };
}
