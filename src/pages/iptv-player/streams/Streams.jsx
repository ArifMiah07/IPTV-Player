import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

//
export default function StreamPage() {
  // react states
  const [streams, setStreams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // react side effects
  // fetch streams api from backend
  useEffect(() => {
    // fetch
    async function fetchStreams() {
      try {
        const streams_api_url = "http://localhost:5000/api/iptv-player/streams";
        const response = await axios.get(streams_api_url);
        console.log({ response });
        setStreams(response?.data?.data);
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

  if (loading) return <div>loading steams....</div>;
  if (error) return <div>Error:....{error}</div>;

  //
  return (
    // streams page component
    <div className="w-full h-full">
      <h1>this is IPTV Streaming page</h1>
      <div className=" border border-red-500 flex flex-row gap-3 p-3 w-full"></div>
      <div>
        {streams.slice(0, 10).map((stream_item, stream_index) => (
          <div
            className=" w-full h-full pa-2 border border-red-500"
            key={stream_index}>
            <p>Stream index: {stream_index}</p>
            <p>Stream title: {stream_item.title}</p>
            <p className=" w-full h-full flex flex-col items-start justify-start break-all">
              Stream url: {stream_item.url}
            </p>
            <div className="border border-green-500  w-full h-full">
              <ReactPlayer controls={true} src={stream_item.url} />
            </div>
          </div>
        ))}
      </div>
      <div className="border border-green-500  w-full h-full">
        <ReactPlayer controls={true} src={"http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/659e598ab9adc4000843c574/master.m3u8"} />
      </div>
    </div>
  );
}
