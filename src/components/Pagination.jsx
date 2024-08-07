import useViewport from "../functions/useViewport";

const Pagination = ({ totalPages, currentPage, handleClick }) => {

  const { width } = useViewport();
  const isMobile = width <= 640;

  const buttonsGroup = () => {
    let start = Math.floor((currentPage - 1) / 3) * 3;
    const buttons = [];

    if (start + 1 > 1) {
      buttons.push(
        <button key="1" className={`text-xl font-semibold border border-blue-700 rounded w-10 h-12 ${1 === currentPage ? "text-white bg-blue-700" : "text-blue-700 bg-white"}`} onClick={() => handleClick(1)} disabled={1 === currentPage}>
          1
        </button>
      );
      if (start + 1 > 2) {
        buttons.push(<span key="dots1">. . .</span>);
      }
    }

    for (let i = 1; i <= 3; i++) {
      if (start + i <= totalPages) {
        buttons.push(
          <button key={start + i} className={`text-xl font-semibold border border-blue-700 rounded w-10 h-12 ${start + i === currentPage ? "text-white bg-blue-700" : "text-blue-700 bg-white"}`} onClick={() => handleClick(start + i)} disabled={start + i === currentPage}>
            {start + i}
          </button>
        );
      }
    }

    if (start + 3 < totalPages) {
      if (start + 4 < totalPages) {
        buttons.push(<span key="dots2">. . .</span>);
      }
      buttons.push(
        <button key={totalPages} className={`text-xl font-semibold border border-blue-700 rounded w-10 h-12 ${totalPages === currentPage ? "text-white bg-blue-700" : "text-blue-700 bg-white"}`} onClick={() => handleClick(totalPages)}>
          {totalPages}
        </button>
      );
    }

    return buttons;
  }

  return (
    <div className="w-full pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
      <h1 className="text-blue-800 font-semibold">Páginas:</h1>
      {!isMobile && <button className={`font-semibold rounded p-2 w-24 ${1 == currentPage ? "bg-gray-100 text-black" : "bg-blue-100 hover:bg-blue-50 text-blue-700"}`} onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>}
      <div className="flex gap-2 sm:gap-4 justify-center items-center">
        {/* {pageNumbers.map((number) => (
          <button className={`text-xl font-semibold border border-blue-700 rounded w-10 h-12 ${number === currentPage ? "text-white bg-blue-700" : "text-blue-700 bg-white"}`} key={number} onClick={() => handleClick(number)} disabled={number === currentPage}>
            {number}
          </button>
        ))} */}
        {buttonsGroup()}
      </div>
      <div className="flex gap-2">
        {isMobile && <button className={`font-semibold rounded p-2 w-24 ${1 == currentPage ? "bg-gray-100 text-black" : "bg-blue-100 hover:bg-blue-50 text-blue-700"}`} onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>}
        <button className={`font-semibold rounded p-2 w-24 ${totalPages == currentPage ? "bg-gray-100 text-black" : "bg-blue-100 hover:bg-blue-50 text-blue-700"}`} onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </div>
  )
}

export default Pagination;