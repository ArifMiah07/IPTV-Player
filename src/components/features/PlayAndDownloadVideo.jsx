import { Link } from "react-router-dom";
import { NavMenuButton } from "../buttons/CustomButtons";

export default function PlayAndDownloadVideo({ handleSectionVisibility }) {
  return (
    <section className={` relative flex flex-col w-full h-full `}>
      <div className="absolute top-0 right-0">
        <button
          onClick={handleSectionVisibility}
          className="cursor-pointer tooltip ">
          <p className="tooltiptext text-sm">Hide</p>X
        </button>
      </div>
      {/* heading */}
      <h1 className={`text-[#000000b3] text-[24px] font-bold  `}>
        Play and Download Videos
      </h1>
      {/* content */}
      {/* heading */}
      <div className="w-full lg:w-[36%] h-full flex flex-col  relative z-10 ">
        <p className=" text-[rgba(0,0,0,0.7)] max-w-md my-3">
          Play Video From Mainstream Platforms <br />
          And download video from Facebook, <br />
          YouTube, Instagram, Twitter...
        </p>
        <div className=" flex flex-row items-center gap-4">
          <Link to="/home/iptv-player/player">
            <button
              className={`flex items-center justify-center cursor-pointer play-now-btn px-3.5 py-1.5`}>
              Play Now
            </button>
          </Link>
          <Link to="/home/iptv-player/library">
            <button
              className={`flex items-center justify-center cursor-pointer download-now-btn px-3.5 py-1.5`}>
              Download Now
            </button>
          </Link>
        </div>
      </div>
      {/* <div>
      </div> */}
    </section>
  );
}
