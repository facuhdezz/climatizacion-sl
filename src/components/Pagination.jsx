const Pagination = ({ totalPages, currentPage, handleClick }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="w-full pt-4 flex gap-4 justify-center">
        {pageNumbers.map((number) => (
          <button className={`text-xl font-semibold border border-blue-700 rounded w-10 h-12 ${number === currentPage ? "text-white bg-blue-700" : "text-blue-700 bg-white"}`} key={number} onClick={() => handleClick(number)} disabled={number === currentPage}>
            {number}
          </button>
        ))}
      </div>
    )
  }

  export default Pagination;