function ShowingResults({ currentPage, pageCount, PAGE_SIZE, ORDER_PAGE_SIZE, count }) {
  const size = ORDER_PAGE_SIZE || PAGE_SIZE;
  return (
    <div className="hidden md:flex">
      <p className="ml-2 text-base">
        Rows per page: <span className="font-semibold">{(currentPage - 1) * size + 1}</span> -{" "}
        <span className="font-semibold">
          {currentPage === pageCount ? count : currentPage * size}
        </span>{" "}
        of <span className="font-semibold">{count}</span>
      </p>
    </div>
  );
}

export default ShowingResults;
