import { Toaster } from "sonner";
import useFetchStreams from "../../../hooks/useFetchStreams";
import { usePagination } from "../../../hooks/usePagination";
// import PaginationControls from "../../../components/pagination/PaginationControls";
import Sidebar from "../../../components/sidebar/Sidebar";
import StreamsGrid from "../../../components/streams/StreamsGrid";
import PaginationNumbers from "../../../components/pagination/PaginationNumbers";

//
export default function StreamPage() {
  // react states
  // use hooks
  const { streams, loading, error, totalItems } = useFetchStreams();
  const {
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
    channelsPerPage,
    channelsInput,
    setChannelsInput,
    handleChannelsPerPage,
  } = usePagination(totalItems);

  // react side effects
  //

  // variables
  const paginatedStreams = streams?.slice(startIndex, endIndex);

  // console
  console.log(totalItems);
  console.log(numbersOfPages);
  // console.log(arr);
  // console.log(pagesArray);
  console.log(currentPage);
  // console.log(isNaN(40));

  // error handling

  if (loading) return <div>loading steams....</div>;
  if (error) return <div>Error:....{error}</div>;

  // TODO:
  // 1. make it responsive later
  //

  // return component
  return (
    // streams page component
    <div className="w-full h-full">
      {/* toast */}
      <Toaster richColors position="top-right" />
      {/* <ClockPage /> */}
      <h1 className="text-lg font-normal">Iptv player {">"} Streaming</h1>
      <div className="  flex flex-row gap-3 p-3 w-full">
        {/* basic information and action */}
      </div>
      {/* main content */}
      <div className="w-full h-full flex flex-col lg:grid lg:grid-cols-5 border-4 border-blue-500 ">
        {/* streams grid */}
        <StreamsGrid streams={paginatedStreams} />
        {/* sidebar */}
        <Sidebar
          currentPage={currentPage}
          numbersOfPages={numbersOfPages}
          inputRange={inputRange}
          setInputRange={setInputRange}
          onNext={handleNextPage}
          onPrev={handlePrevPage}
          onGoto={handleGotoPage}
          channelsPerPage={channelsPerPage}
          channelsInput={channelsInput}
          setChannelsInput={setChannelsInput}
          handleChannelsPerPage={handleChannelsPerPage}
        />
      </div>
      <div className=" border border-red-500 flex flex-row gap-3 p-3 w-full">
        <div>
          <p className="text-lg font-black">{currentPage}</p>
        </div>
      </div>
      {/* pagination */}
      <PaginationNumbers
        numbersOfPages={numbersOfPages}
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
      />
    </div>
  );
}

// i was aiming to solve streaming cors issue in browser by adding a proxy server but after jumping few sites it feels like im too young ooo young for this.
