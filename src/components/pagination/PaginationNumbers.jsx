import { useState } from "react";

const PaginationNumbers = ({
  numbersOfPages,
  currentPage,
  handleCurrentPage,
}) => {
  const pagesArray = Array.from({ length: 10 }, (_, i) => currentPage + i);
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
        <span>{"..."}</span>
        <button className={` border border-red-500  py-2 px-3 `}>
          {numbersOfPages}
        </button>
      </div>
    </div>
  );
};

export default PaginationNumbers;
