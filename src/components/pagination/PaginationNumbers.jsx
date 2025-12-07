const PaginationNumbers = ({numbersOfPages, currentPage, handleCurrentPage}) => {
       const pagesArray = Array.from({ length: numbersOfPages }, (_, i) => i + 1);
  return (
    <div className="w-full h-full">
      <div className="flex flex-row gap-2 flex-wrap">
        {pagesArray?.map((page, index) => (
          <button
            onClick={() => handleCurrentPage(page)}
            key={index}
            className={` border border-red-500  py-2 px-3 ${
              page === currentPage ? "bg-green-500" : ""
            }  `}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginationNumbers;
