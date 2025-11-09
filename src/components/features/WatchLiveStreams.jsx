// import { NavMenuButton } from "../buttons/CustomButtons";
import image1 from "../../assets/black-white-tv.png";
import image2 from "../../assets/wild-life-nature.jpg";

export default function WatchLiveStreams({
  handleSectionVisibility,
}) {
  return (
    <section className={` relative flex flex-col w-full h-full `}>
      {/* visibility state */}
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
        <div className="my-4 flex flex-row  ">
          {/* <div>
            <NavMenuButton
              label={"Lunch IPTV Now"}
              styles={"link-btn nav-link-btn "}></NavMenuButton>
          </div> */}
          <div className="w-full  ">
            <img
              src={image1}
              className="w-[300px] h-[140px] object-cover shadow-[12px_12px_4px_rgba(161,0,255,1)] "
              alt="black and white tv channel"
            />
          </div>
          <div className="w-full  ">
            <img
              src={image2}
              className="w-[300px] h-[140px] object-cover shadow-[12px_12px_4px_rgba(161,0,255,1)] "
              alt="black and white tv channel"
            />
          </div>
        </div>
        {/*  */}
        <div></div>
      </div>
    </section>
  );
}
