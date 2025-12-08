import { HiViewfinderCircle } from "react-icons/hi2";
import { MdOutlineStar } from "react-icons/md";
import ReactPlayer from "react-player";

/* @props const streams_type = {
  channel: null,
  feed: null,
  title: "Iman TV",
  url: "https://live.relentlessinnovations.net:1936/imantv/imantv/playlist.m3u8",
  quality: "480p",
  user_agent: null,
  referrer: null,
};
*/

const StreamsGrid = ({ streams }) => {
  return (
    <div className=" w-full h-full col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-center justify-items-center gap-4 p-4  ">
      {streams?.map((stream_item, stream_index) => (
        <div
          className=" w-full h-full flex flex-col items-center justify-center border border-rose-50 bg-radial-[at_50%_75%] from-sky-100 via-violet-100 to-fuchsia-100 to-90%"
          key={stream_index}>
          <div className="w-full flex flex-col flex-wrap">
            <div className="flex gap-2 px-2">
              <span className="font-medium">{stream_index + 1}.</span>
              <p>
                {stream_item.channel ? stream_item.channel : stream_item.title}
              </p>
            </div>
            <div className="w-full flex flex-row gap-2 flex-wrap items-center p-2  ">
              <span>
                <HiViewfinderCircle />
              </span>
              {/* save or locally or save to a playlist <localStorage || default, playlist name> */}
              {/* <MdOutlineStarBorder /> */}
              <span>
                <MdOutlineStar />
              </span>
              <span>{""}</span>
            </div>
          </div>
          <div className="w-full h-full flex flex-col border border-green-50  ">
            <ReactPlayer
              // pip={true}
              controls={true}
              src={stream_item.url}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StreamsGrid;
