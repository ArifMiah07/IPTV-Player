import { useState } from "react";
import { toast } from "sonner";

export const usePagination = (totalItems) => {
  // react states
  const [currentPage, setCurrentPage] = useState(1);
  const [inputRange, setInputRange] = useState(currentPage);

  // use hooks
  //   const { totalItems } = useFetchStreams();

  // variables
  const itemsPerPage = 10;
  const numbersOfPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  // handler functions
  // handle current page
  const handleCurrentPage = (page) => {
    setCurrentPage(page);
    setInputRange(page);
  };
  // handle GotoPage
  const handleGotoPage = (e) => {
    e.preventDefault();
    const pageNumber = Number(inputRange.trim());
    //
    if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > numbersOfPages) {
      toast.error(`plz enter a number between ${1} to ${numbersOfPages}`);
      return;
    }

    handleCurrentPage(pageNumber);
  };

  // handle next page btn
  const handleNextPage = () => {
    //
    if (currentPage < numbersOfPages) {
      setCurrentPage((prev) => prev + 1);
      setInputRange(currentPage + 1);
    }
  };

  // handle prev page btn
  const handlePrevPage = () => {
    //
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      setInputRange(currentPage - 1);
    }
  };

  return {
    currentPage,
    numbersOfPages,
    startIndex,
    endIndex,
    inputRange,
    setInputRange,
    handleCurrentPage,
    handleGotoPage,
    handleNextPage,
    handlePrevPage,
  };
};
