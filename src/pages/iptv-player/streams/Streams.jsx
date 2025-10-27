import ReactPlayer from "react-player";

export default function StreamPage() {
  return (
    <div>
      <h1>this is IPTV Streaming page</h1>
      <div className="w-[700px]">
        <ReactPlayer src="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
      </div>
    </div>
  );
}
