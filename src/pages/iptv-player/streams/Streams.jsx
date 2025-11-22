import ReactPlayer from "react-player";

export default function StreamPage() {
  return (
    <div>
      <h1>this is IPTV Streaming page</h1>
      <div className=" border border-red-500 flex flex-row gap-3 p-3 w-[700px]">
        <div className="border border-green-500  w-[200px] h-[200px]"></div>
        <div className="border border-green-500  w-[200px] h-[200px]"></div>
        <div className="border border-green-500  w-[200px] h-[200px]"></div>
      </div>
    </div>
  );
}