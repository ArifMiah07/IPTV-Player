import { createContext, useContext, useState } from "react";

//
export const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  // react states
  const [currentPage, setCurrentPage] = useState(1);
  const [inputRange, setInputRange] = useState(currentPage);
  const [channelsPerPage, setChannelsPerPage] = useState(10);
  const [channelsInput, setChannelsInput] = useState(10);
  const [totalItems, setTotalItems] = useState(0);

  // use hooks
  //   const { totalItems } = useFetchStreams();

  // variables
  //   let channelsPerPage;
  const numbersOfPages = Math.ceil(totalItems / channelsPerPage);
  const startIndex = (currentPage - 1) * channelsPerPage;
  const endIndex = currentPage * channelsPerPage;

  // handler functions
  // handle current page
  const handleCurrentPage = (page) => {
    setCurrentPage(page);
    setInputRange(page);
  };
  // handle GotoPage
  const handleGotoPage = (e) => {
    e.preventDefault();
    const pageNumber = Number(inputRange?.trim());
    //
    if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > numbersOfPages) {
      toast.error(`plz enter a number between ${1} to ${numbersOfPages}`);
      return;
    }

    handleCurrentPage(pageNumber);
    toast.success(`Showing page no. ${pageNumber}`);
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

  //   const handleSetChannelsPerPage = (page) => {
  // };

  // handle channels per page
  const handleChannelsPerPage = (e) => {
    e.preventDefault();
    const channelsPerPageLimit = 100;
    const channelsNumberPerPage = Number(channelsInput?.trim());
    //
    if (
      isNaN(channelsNumberPerPage) ||
      channelsNumberPerPage < 1 ||
      channelsNumberPerPage > channelsPerPageLimit
    ) {
      toast.error(`plz enter a number between 1 to ${channelsPerPageLimit}`);
      return;
    }
    //
    setChannelsPerPage(channelsNumberPerPage);
    toast.success(`Showing ${channelsNumberPerPage} channels per page`);

    // reset to page 10 when changing items per page
    setCurrentPage(1);
    setInputRange(1);
  };

  const getValue = {
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
    channelsInput,
    setChannelsInput,
    channelsPerPage,
    handleChannelsPerPage,
    totalItems,
    setTotalItems,
  };
  return (
    <PaginationContext.Provider value={getValue}>
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error(`usePagination must be use within PaginationProvider`);
  }
  return context;
};
