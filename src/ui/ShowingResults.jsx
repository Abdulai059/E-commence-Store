function ShowingResults({ currentPage, pageCount, PAGE_SIZE, count }) {
  return (
    <div className="hidden md:flex">
      <p className="ml-2 text-base">
        showing <span className="font-semibold">{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span className="font-semibold">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span className="font-semibold">{count}</span> results
      </p>
    </div>
  );
}

export default ShowingResults;
