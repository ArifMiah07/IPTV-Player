import ReactPlayer from "react-player";

export default function StreamPage() {
  return (
    <div>
      <h1>this is IPTV Streaming page</h1>
      <div className="w-[700px]">
        <ReactPlayer crossOrigin="use-credentials" src="http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/65a9b20f0c7ff50008d3a3b6/master.m3u8?appName=w…eviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=7d2a2bb4-c275-4221-a998-d1a0bf52b786" />
      </div>
    </div>
  );
}