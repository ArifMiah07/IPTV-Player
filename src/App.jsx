import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // state
  const [channelsData, setChannelsData] = useState(null);
  const [channelsLength, setChannelsLength] = useState(0);
  //
  const [streamsData, setStreamsData] = useState(null);
  const [streamsLength, setStreamsLength] = useState(0);
  //
  const [feedsData, setFeedsData] = useState(null);
  const [feedsLength, setFeedsLength] = useState(0);
  //
  useEffect(() => {
    const getChannelsData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/iptv-player/channels"
        );
        setChannelsData(res?.data?.data);
        setChannelsLength(res?.data?.length);
      } catch (error) {
        console.log(error);
        throw new Error("Something went wrong!");
      }
    };
    getChannelsData();
  }, []);
  //
  useEffect(() => {
    const getStreamsData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/iptv-player/streams"
        );
        setStreamsData(res?.data?.data);
        setStreamsLength(res?.data?.length);
      } catch (error) {
        console.log(error);
        throw new Error("Something went wrong!");
      }
    };
    getStreamsData();
  }, []);
  //
  useEffect(() => {
    const getFeedsData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/iptv-player/feeds"
        );
        setFeedsData(res?.data?.data);
        setFeedsLength(res?.data?.length);
      } catch (error) {
        console.log(error);
        throw new Error("Something went wrong!");
      }
    };
    getFeedsData();
  }, []);

  // functions
  console.log(channelsData);
  return (
    <main className="container">
      <h1 className="text-[#ff0062] text-shadow-md font-bold text-7xl ">
        IPTV Player
      </h1>
      <h1>total channels : {channelsLength}</h1>
      <h1>total streams : {streamsLength}</h1>
      <h1>total feeds : {feedsLength}</h1>
    </main>
  );
}

export default App;
