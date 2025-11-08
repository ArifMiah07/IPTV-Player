import { useState } from "react";
// import { NavMenuButton } from "../buttons/CustomButtons";

export default function WatchLiveStreams({
  handleSectionVisibility,
  // isSectionClose,
}) {
  return (
    <section
      className={` relative flex flex-col w-full h-full `}>
      <div className="absolute top-0 right-0">
        <button
          onClick={handleSectionVisibility}
          className="cursor-pointer tooltip ">
          <p className="tooltiptext text-sm">Hide</p>X
        </button>
      </div>
      {/* heading */}
      <h1 className={`text-[#000000b3] text-[24px] font-bold  `}>
        Watch Live Streams
      </h1>
      {/* content */}
      <div>
        {/*  */}
        <div>
          {/* <NavMenuButton label={"Lunch IPTV Now"}></NavMenuButton> */}
        </div>
        {/*  */}
        <div></div>
      </div>
    </section>
  );
}
