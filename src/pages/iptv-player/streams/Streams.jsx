import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import ClockPage from "../../../components/clock/clock";

//
export default function StreamPage() {
  // react states
  const [streams, setStreams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // react side effects
  // fetch streams api from backend
  useEffect(() => {
    // fetch
    async function fetchStreams() {
      try {
        const streams_api_url = "http://localhost:5000/api/iptv-player/streams";
        const response = await axios.get(streams_api_url);
        // console.log({ response });
        setStreams(response?.data?.data);
        setTotalItems(response?.data?.length);
        setError(null); // clear previous error
      } catch (error) {
        //
        console.log(error);
        setError(error.message || "something went wrong!");
      } finally {
        //
        setLoading(false);
        console.log("complete");
      }
    }
    // call
    fetchStreams();
  }, []);

  // variables
  // const allItems = totalItems;
  const itemsPerPage = 10;
  const numbersOfPages = Math.abs(Math.round(totalItems / itemsPerPage));
  // const arr = Array(numbersOfPages).fill(numbersOfPages);
  const arr2 = Array.from({ length: numbersOfPages }, (_, i) => i + 1);

  // handler functions
  // handle current page
  const handleCurrentPage = (a) => {
    //
    console.log(a);
    setCurrentPage(a);
  };

  // console
  console.log(totalItems);
  console.log(numbersOfPages);
  // console.log(arr);
  console.log(arr2);
  console.log(currentPage);

  // error handling

  if (loading) return <div>loading steams....</div>;
  if (error) return <div>Error:....{error}</div>;

  // return component
  return (
    // streams page component
    <div className="w-full h-full">
      {/* <ClockPage /> */}
      <h1>this is IPTV Streaming page</h1>
      {/* <div className=" border border-red-500 flex flex-row gap-3 p-3 w-full"></div> */}
      <div className="p-4 border border-red-500">
        {streams.slice(0, 1).map((stream_item, stream_index) => (
          <div
            className=" w-full h-full pa-2 border border-red-500"
            key={stream_index}>
            {/* <p>Stream index: {stream_index}</p>
            <p>Stream title: {stream_item.title}</p>
            <p className=" w-full h-full flex flex-col items-start justify-start break-all">
              Stream url: {stream_item.url}
            </p> */}
            <div className="border border-green-500  w-full h-full">
              <ReactPlayer pip={true} controls={true} src={stream_item.url} />
            </div>
          </div>
        ))}
      </div>
      {/* pagination */}
      <div className="w-full h-full">
        <div className="flex flex-row gap-2 flex-wrap">
          {arr2?.map((a, i) => (
            <button
              onClick={() => handleCurrentPage(a)}
              key={i}
              className=" border border-red-500  py-2 px-3 ">
              {a}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// i was aiming to solve streaming cors issue in browser by adding a proxy server but after jumping few sites it feels like im too young ooo young for this.
