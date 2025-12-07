import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import ClockPage from "../../../components/clock/clock";
import { toast, Toaster } from "sonner";
import useFetchStreams from "../../../hooks/useFetchStreams";

//
export default function StreamPage() {
  // react states
  // const [streams, setStreams] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputRange, setInputRang] = useState(currentPage);
  const { streams, loading, error, totalItems } = useFetchStreams();

  // react side effects
  // fetch streams api from backend
  // useEffect(() => {
  //   // fetch
  //   async function fetchStreams() {
  //     try {
  //       const streams_api_url = "http://localhost:5000/api/iptv-player/streams";
  //       const response = await axios.get(streams_api_url);
  //       // console.log({ response });
  //       setStreams(response?.data?.data);
  //       setTotalItems(response?.data?.length);
  //       setError(null); // clear previous error
  //     } catch (error) {
  //       //
  //       console.log(error);
  //       setError(error.message || "something went wrong!");
  //     } finally {
  //       //
  //       setLoading(false);
  //       console.log("complete");
  //     }
  //   }
  //   // call
  //   fetchStreams();
  // }, []);

  // variables
  // const allItems = totalItems;
  const itemsPerPage = 10;
  const numbersOfPages = Math.ceil(totalItems / itemsPerPage);
  const arr2 = Array.from({ length: numbersOfPages }, (_, i) => i + 1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  // handler functions
  // handle current page
  const handleCurrentPage = (page) => {
    setCurrentPage(page);
    setInputRang(page);
  };
  // handle GotoPage
  const handleGotoPage = (e) => {
    e.preventDefault();
    const pageNumber = Number(inputRange.trim());
    if (isNaN(pageNumber)) {
      toast.error(`plx enter a number between ${1} to ${numbersOfPages}`);
      return;
    }
    if (pageNumber < 1 || pageNumber > numbersOfPages) {
      toast.error(`plx enter a number between ${1} to ${numbersOfPages}`);
      return;
    }
    // if (!isNaN(pageNumber) && pageNumber > 0 && pageNumber <= numbersOfPages) {
    // }
    handleCurrentPage(pageNumber);
  };

  // console
  console.log(totalItems);
  console.log(numbersOfPages);
  // console.log(arr);
  console.log(arr2);
  console.log(currentPage);
  console.log(isNaN(40));

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
      <h1>this is IPTV Streaming page</h1>
      <div className=" border border-red-500 flex flex-row gap-3 p-3 w-full">
        {/* basic information and action */}
        <div className="flex flex-row gap-4">
          {/* show current page */}
          <p className={`text-lg font-md bg-green-400 px-4 py-2 rounded-sm `}>
            Current Page: {currentPage}
          </p>
          {/* next page btn */}
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage >= numbersOfPages}
            className={`text-lg font-md  px-4 py-2 rounded-sm ${
              currentPage >= numbersOfPages ? "bg-gray-400" : "bg-green-400"
            } `}>
            Next Page
          </button>
          {/* previous page btn */}
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage <= 1}
            className={`text-lg font-md px-4 py-2 rounded-sm ${
              currentPage <= 1 ? "bg-gray-400 " : "bg-green-400 "
            } `}>
            Previous Page
          </button>
          {/* handle go to a specific page with user input */}
          <div className="text-lg font-md bg-green-400 px-4 py-2 rounded-sm">
            {/* form */}
            <form onSubmit={handleGotoPage} className="">
              {/* take input */}
              <input
                className="outline-0"
                value={inputRange}
                onChange={(e) => setInputRang(e.target.value)}
                placeholder="Go to a page"
                type="text"
                min={1}
              />
              {/* go to btn */}
              <button type="submit" className="outline-0 ">
                Go
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col lg:grid lg:grid-cols-5 border-4 border-blue-500 ">
        <div className=" w-full h-full col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-center justify-items-center gap-4 p-4 border-4 border-teal-500">
          {streams
            .slice(startIndex, endIndex)
            .map((stream_item, stream_index) => (
              <div
                className=" w-full h-full flex flex-col items-center justify-center border border-red-500"
                key={stream_index}>
                {/* <p>Stream index: {stream_index}</p>
            <p>Stream title: {stream_item.title}</p>
            <p className=" w-full h-full flex flex-col items-start justify-start break-all">
              Stream url: {stream_item.url}
            </p> */}
                <div className="flex flex-col items-center justify-center border border-green-500  w-full h-full">
                  <ReactPlayer
                    // pip={true}
                    controls={true}
                    src={stream_item.url}
                  />
                </div>
              </div>
            ))}
        </div>
        {/* sidebar */}
        <div className=" lg:col-span-1 border-2 border-green-400  ">
          side bar
        </div>
      </div>
      <div className=" border border-red-500 flex flex-row gap-3 p-3 w-full">
        <div>
          <p className="text-lg font-black">{currentPage}</p>
        </div>
      </div>
      {/* pagination */}
      <div className="w-full h-full">
        <div className="flex flex-row gap-2 flex-wrap">
          {arr2?.map((a, i) => (
            <button
              onClick={() => handleCurrentPage(a)}
              key={i}
              className={` border border-red-500  py-2 px-3 ${
                a === currentPage ? "bg-green-500" : ""
              }  `}>
              {a}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// i was aiming to solve streaming cors issue in browser by adding a proxy server but after jumping few sites it feels like im too young ooo young for this.
