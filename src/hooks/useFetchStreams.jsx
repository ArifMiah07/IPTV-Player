//

import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../constants/url";
import { usePagination } from "./usePagination";

const useFetchStreams = () => {
  // react states
  const [streams, setStreams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalItems, setTotalItems] = useState(0);

  const {
    currentPage,
    channelsPerPage,
    numbersOfPages,
    handleNextPage,
    handlePrevPage,
  } = usePagination(totalItems);

  // use hooks
  // constants

  // react side effects
  // fetch streams api from backend
  useEffect(() => {
    // fetch
    async function fetchStreams() {
      try {
        const response = await axios.get(API_URL.streams_api_url, {
          params: { currentPage, channelsPerPage },
        });
        setStreams(response?.data?.data);
        setTotalItems(response?.data?.totalItems);
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
  }, [currentPage, channelsPerPage]);

  return { streams, loading, error, totalItems };
};

export default useFetchStreams;
