import PlayAndDownloadVideo from "../../../components/features/PlayAndDownloadVideo";
import WatchLiveStreams from "../../../components/features/WatchLiveStreams";

export default function FeaturesPage() {
  return (
    <section className="w-full h-full flex flex-col gap-5 ">
      {/* welcome message */}
      <div className="w-full h-[54px]   bg-[#D9D9D933] p-5 backdrop-blur-xs ">
        <h1>Welcome To IPTV Player</h1>
      </div>
     <div className="w-full h-[300px]   bg-[#D9D9D933] p-5 backdrop-blur-xs ">
        <WatchLiveStreams></WatchLiveStreams>
      </div>
     <div className="w-full h-[300px]   bg-[#D9D9D933] p-5 backdrop-blur-xs ">
        <PlayAndDownloadVideo></PlayAndDownloadVideo>{" "}
      </div>
    </section>
  );
}
