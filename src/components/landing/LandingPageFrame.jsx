import { Link } from "react-router-dom";
import iptvPayerImage from "./IPTV-Player.svg";

export default function LandingPageFrame() {
  return (
    <section className=" mx-auto min-w-screen min-h-screen relative z-40 overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(#ff00ff_0%,#ff00ff_50%,#ffffff_100%)] before:opacity-10 before:-z-10   ">
      <div className="w-full h-screen relative z-40 overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-blue-500  before:opacity-10 before:filter before:blur-[400px] before:-z-10 p-4 lg:p-12 ">
        {/* heading */}
        <div className="w-fit h-fit lg:px-12 py-4 relative z-40 overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[#00FFFF]  before:opacity-10 before:filter before:blur-[100px] before:-z-10  mt-24 ">
          {/* <h1 className="z-10 text-7xl font-bold text-shadow-lg drop-shadow-md  text-blue-500  ">IPTV Player</h1> */}
          <img
            className=" w-full h-full md:w-full md:h-full"
            src={iptvPayerImage}
            alt="iptv player image"
          />
          <h1 className="text-[#0E2AAB] font-semibold text-[16px] md:text-[24px]   ">
            Stream 14,000+ Live Channels Instantly
          </h1>
        </div>
        {/* description */}
        <div className="w-fit h-fit lg:px-12 py-4 relative z-40 overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[#EEFFEE] before:opacity-30 before:filter before:blur-[100px] before:-z-10 ">
          <p className="text-[#001A8D] text-[12px] md:text-[16px] font-normal tracking-[2%] lg:tracking-[4%] leading-4 lg:leading-6  ">
            Experience fast, reliable, and responsive IPTV streaming <br />
            with powerful search, bookmarks, and seamless <br />
            playback on any device. <br />
          </p>
          <div className="flex flex-col md:flex-row mt-4 gap-4">
            <button
              type="button"
              className=" w-fit h-fit bg-[#225DC9] text-white px-5 py-2 text-[18px] shadow-[8px_8px_0_rgba(173,30,255,0.25)]   ">
              <Link to={"/home"}>Launch IPTV Player</Link>
            </button>
            <button
              type="button"
              className=" w-fit h-fit bg-[#225DC9] text-white px-5 py-2 text-[18px] shadow-[8px_8px_0_rgba(173,30,255,0.25)]  lg:shadow-[8px_-8px_0_rgba(173,30,255,0.25)]   ">
              <Link to={"/about"}>Learn More</Link>
            </button>
          </div>
        </div>
        {/* <div class="bg-white p-6 rounded-lg shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
          This div has a custom inner shadow.
        </div> */}
      </div>
    </section>
  );
}
