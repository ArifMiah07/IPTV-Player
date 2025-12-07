//

import axios from "axios";
import { useEffect, useState } from "react";

const useFetchStreams = () => {
  // react states
  const [streams, setStreams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalItems, setTotalItems] = useState(0);

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

  return { streams, loading, error, totalItems };
};

export default useFetchStreams;
