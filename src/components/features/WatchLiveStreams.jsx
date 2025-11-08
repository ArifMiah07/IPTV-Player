import { useState } from "react";
import { NavMenuButton } from "../buttons/CustomButtons";

const [isSectionClose, setIsSectionClose] = useState(false);

console.log(isSectionClose);
const handleSectionVisibility = () => {
  console.log("clicked");
  setIsSectionClose(!isSectionClose);
  console.log(isSectionClose);
};

export default function WatchLiveStreams() {
  return (
    <section className=" relative flex flex-col w-full h-full ">
      <div className="absolute top-0 right-0">
        <button
          onClick={handleSectionVisibility}
          className="cursor-pointer tooltip ">
          <span className="tooltiptext text-sm">Hide</span>X
        </button>
      </div>
      {/* heading */}
      <h1 className="text-[#000000b3] text-[24px] font-bold  ">
        Watch Live Streams
      </h1>
      <span>{isSectionClose ? "hide" : "close"}</span>
      {/* content */}
      <div>
        {/*  */}
        <div>
          <NavMenuButton label={"Lunch IPTV Now"}></NavMenuButton>
        </div>
        {/*  */}
        <div></div>
      </div>
    </section>
  );
}
