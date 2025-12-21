import axios from "axios";
import { useEffect, useState } from "react";

import TestingUrlLoadingSkeleton from "./TestingUrlLoadingSkeleton";
import { toast } from "sonner";
import { Toaster } from "sonner";
import { useTestingUrl } from "../../contexts/ContextTestingUrl";

const TestingUrl = () => {
  const {
    currentPage,
    setCurrentPage,
    channelsPerPage,
    setChannelsPerPage,
    // server-confirm values
    confirmedCurrentPage,
    setConfirmedCurrentPage,
    confirmedChannelsPerPage,
    setConfirmedChannelsPerPage,
  } = useTestingUrl();

  //
  const [testingData, setTestingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [pageRangeInput, setPageRangeInput] = useState(1);
  const [channelsRangeInput, setChannelsRangeInput] = useState(10);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [channelsPerPage, setChannelsPerPage] = useState(10);
  // const [page, setPage] = useState(currentPage);
  // const [channels, setChannels] = useState(channelsPerPage);

  //

  useEffect(() => {
    const fetchTestingUrl = async () => {
      try {
        const testingUrl = "http://localhost:5000/api/iptv-player/testing-url";
        const response = await axios.get(testingUrl, {
          params: { currentPage, channelsPerPage },
        });
        // console.log(response);
        setTestingData(response?.data?.data);
        setConfirmedCurrentPage(response?.data?.currentPage);
        setConfirmedChannelsPerPage(response?.data?.channelsPerPage);
        setError(null);
      } catch (error) {
        // console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
        // console.log("complete");
      }
    };

    fetchTestingUrl();
  }, [currentPage, channelsPerPage]);

  //   vars
  const numbersOfPages = 12000;
  const channelsPerPageLimit = 100;

  //   console.log("data: ", testingData);
  //   console.log("data: ", confirmedCurrentPage);
  //   console.log("data: ", confirmedChannelsPerPage);
  // handler function

  //   handle current page
  const handleCurrentPage = (page) => {
    //
    setCurrentPage(page);
    setPageRangeInput(page);
  };
  //   handle channels per page
  const handleChannelsPerPage = (channels) => {
    //
    setChannelsPerPage(channels);
    setChannelsRangeInput(channels);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const pageNumber = Number(pageRangeInput);
    const numberOfChannels = Number(channelsRangeInput);

    let hasError = false;

    if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > numbersOfPages) {
      //
      toast.error(`{plz give a 1 to ${numbersOfPages} }`);
      hasError = true;
      //   return;
    }
    if (
      isNaN(numberOfChannels) ||
      numberOfChannels < 1 ||
      numberOfChannels > channelsPerPageLimit
    ) {
      //
      toast.error(`{plz give a 1 to ${channelsPerPageLimit} }`);
      hasError = true;
      //   return;
    }

    if (hasError) return;

    if (pageNumber !== currentPage) {
      handleCurrentPage(pageNumber);
    }
    if (numberOfChannels !== channelsPerPage) {
      handleChannelsPerPage(numberOfChannels);
    }
    toast.success(`Updated Successfully!`);

    // console.log("done, submitted");
    // handleCurrentPage("");
    // handleChannelsPerPage("");
  };

  if (loading) return <TestingUrlLoadingSkeleton />;
  if (error) return <p>Error: {error || "something went wrong"}</p>;

  return (
    <div>
      <Toaster richColors position="top-right" />
      <h1>This is testing Url</h1>
      <p> current page : {confirmedCurrentPage}</p>
      <p>channels per page : {confirmedChannelsPerPage}</p>
      <div>
        data:{" "}
        {testingData ? (
          <>
            <p>{testingData.channel}</p>
            <p>{testingData.title}</p>
            <p>{testingData.url}</p>
          </>
        ) : (
          <p>No data available</p>
        )}
      </div>
      <div className="w-full h-full flex flex-col">
        <form onSubmit={handleFormSubmit} className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="currentPage">Set Current Page</label>
            <input
              id="currentPage"
              value={pageRangeInput}
              onChange={(e) => setPageRangeInput(e.target.value)}
              className="w-1/6 border border-red-400 outline-0 "
              type="text"
              minLength={1}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="channelsPerPage">Set Channels Per Page</label>
            <input
              id="channelsPerPage"
              value={channelsRangeInput}
              onChange={(e) => setChannelsRangeInput(e.target.value)}
              className="w-1/6 border border-red-400 outline-0 "
              type="text"
              minLength={1}
              maxLength={4}
            />
          </div>
          <div>
            <button type="submit"> Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestingUrl;
