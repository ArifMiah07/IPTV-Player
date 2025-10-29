import { Link } from "react-router-dom";
import iptvPayerImage from "./IPTV-Player.svg";

export default function LandingPageFrame() {
  return (
    <section className=" mx-auto min-w-screen min-h-screen relative z-40 overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(#ff00ff_0%,#ff00ff_50%,#ffffff_100%)] before:opacity-10 before:-z-10   ">
      <div className="w-full flex flex-row h-screen relative z-40 overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-blue-500  before:opacity-10 before:filter before:blur-[400px] before:-z-10 p-4 lg:p-12 ">
        <div className="w-full h-full">
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
        </div>
        {/* <div className="flex justify-end w-full h-full bg-transparent  ">
          <CursorTrailsGrid />
        </div> */}
        {/* <div class="bg-white p-6 rounded-lg shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
          This div has a custom inner shadow.
        </div> */}
      </div>
    </section>
  );
}

const StarSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-full h-full">
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
);

const generateGridData = () => {
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      grade: Math.floor(Math.random() * 9) - 4, // -4 to 4
      opacity: (Math.random() * 0.15 + 0.05).toFixed(2),
      hue: Math.floor(Math.random() * 30),
    });
  }
  return data;
};

const CursorTrailsGrid = () => {
  const gridData = generateGridData();

  return (
    <div className="grid grid-cols-10 grid-rows-10 gap-0.5 w-[80vmin] h-[80vmin] cursor-none">
      {gridData.map((item, index) => (
        <div
          key={index}
          className="aspect-square flex items-center justify-center transition-all duration-[0.8s] ease-in opacity-[calc(var(--opacity)*0.5)] rotate-0 filter grayscale brightness-100 scale-150 hover:duration-0 hover:rotate-[calc(var(--grade)*90deg)] hover:filter-none hover:brightness-150 hover:opacity-100"
          style={{
            "--grade": item.grade,
            "--opacity": item.opacity,
            color: `hsl(${item.hue} 80% 50%)`,
          }}>
          <StarSVG />
        </div>
      ))}
    </div>
  );
};
