function ShowingResults({ currentPage, pageSize, count }) {

  const end = Math.min(currentPage * pageSize, count);

  return (
    <div className="hidden md:flex">
      <p className="ml-2 text-base">
        Rows per page: <span className="font-semibold">{currentPage}</span> -{" "}
        <span className="font-semibold">{end}</span> of <span className="font-semibold">{count}</span>
      </p>
    </div>
  );
}

export default ShowingResults;
