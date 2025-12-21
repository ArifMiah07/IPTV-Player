import axios from "axios";
import { useEffect, useState } from "react";

import TestingUrlLoadingSkeleton from "./TestingUrlLoadingSkeleton";

const TestingUrl = () => {
  const [testingData, setTestingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [channelsPerPage, setChannelsPerPage] = useState(10);

  useEffect(() => {
    const fetchTestingUrl = async () => {
      try {
        const testingUrl = "http://localhost:5000/api/iptv-player/testing-url";
        const response = await axios.get(testingUrl, {
          params: { currentPage, channelsPerPage },
        });
        // console.log(response);
        setTestingData(response?.data?.data);
        setError(null);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
        console.log("complete");
      }
    };

    fetchTestingUrl();
  }, [currentPage, channelsPerPage]);

  console.log("data: ", testingData);
  // handler function

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("done, submitted");
  };

  if (loading) return <TestingUrlLoadingSkeleton />;
  if (error) return <p>Error: {error || "something went wrong"}</p>;

  return (
    <div>
      <h1>This is testing Url</h1>
      <p> current page : {currentPage}</p>
      <p>channels per page : {channelsPerPage}</p>
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
        <form onSubmit={handleFormSubmit} className="flex flex-col" action="">
          <div className="flex flex-col">
            <label htmlFor="currentPage">Set Current Page</label>
            <input
              onChange={(e) => setCurrentPage(e.target.value)}
              className="w-1/6 border border-red-400 outline-0 "
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="channelsPerPage">Set Channels Per Page</label>
            <input
              onChange={(e) => setChannelsPerPage(e.target.value)}
              className="w-1/6 border border-red-400 outline-0 "
              type="text"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestingUrl;
