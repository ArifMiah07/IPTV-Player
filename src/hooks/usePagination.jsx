import { useState } from "react";
import { toast } from "sonner";

export const usePagination = (totalItems) => {
  // react states
  const [currentPage, setCurrentPage] = useState(1);
  const [inputRange, setInputRange] = useState(currentPage);
  const [channelsPerPage, setChannelsPerPage] = useState(10);
  const [channelsInput, setChannelsInput] = useState(10);

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
    toast.success(`Showing ${currentPage}'th page`);
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

    // reset to page 10 when changing items per page
    // setCurrentPage(1);
    // setInputRange(1);

    toast.success(`Showing ${channelsNumberPerPage} channels per page`);
  };
  //

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
    channelsInput,
    setChannelsInput,
    channelsPerPage,
    handleChannelsPerPage,
  };
};
