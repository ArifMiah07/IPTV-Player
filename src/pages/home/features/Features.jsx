import { useEffect, useState } from "react";

import PlayAndDownloadVideo from "../../../components/features/PlayAndDownloadVideo";
import WatchLiveStreams from "../../../components/features/WatchLiveStreams";
import { motion, AnimatePresence } from "motion/react";
import GetOurApp from "../../../components/features/GetOurApp";

export default function FeaturesPage() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isSectionClose, setIsSectionClose] = useState(false);
  const [
    isDownloadAndPlayVideoSectionClose,
    setIsDownloadAndPlayVideoSectionClose,
  ] = useState(false);
  const [isGetAppSectionClose, setIsGetAppSectionClose] = useState(false);

  // lunch app
  const handleSectionVisibility = () => {
    console.log("clicked");
    setIsSectionClose(!isSectionClose);
  };
  // play and download
  const handleDownloadAndPlayVideoSectionVisibility = () => {
    console.log("clicked");
    setIsDownloadAndPlayVideoSectionClose(!isDownloadAndPlayVideoSectionClose);
  };
  // get app
  const handleGetAppSectionVisibility = () => {
    console.log("clicked");
    setIsGetAppSectionClose(!isGetAppSectionClose);
  };
  // console.log(isDownloadAndPlayVideoSectionClose);

  // Hide the welcome message after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full h-full flex flex-col gap-2.5 ">
      {/* welcome message */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
            className="w-full h-[54px] bg-[#D9D9D933] p-5 backdrop-blur-xs flex ">
            <h1 className="text-[#000000B3] text-[16px] font-semibold">
              Welcome To IPTV Player
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
      {/* features */}
      {/* lunch iptv player */}
      <div
        className={`w-full h-[300px] border border-[#A100FF] shadow-sm hover:drop-shadow-sm ${
          isSectionClose ? "hidden" : ""
        }   bg-[#D9D9D933] p-5 backdrop-blur-xs `}>
        <WatchLiveStreams
          handleSectionVisibility={handleSectionVisibility}></WatchLiveStreams>
      </div>
      {isSectionClose && (
        <div
          className={`w-full h-[30px] bg-[#D9D9D933] border border-[#A100FF] shadow-sm hover:drop-shadow-sm flex flex-row items-center justify-start p-5 backdrop-blur-xs `}>
          <button
            className="cursor-pointer  "
            onClick={() => setIsSectionClose(!isSectionClose)}>
            <span className="tooltip">
              <p className="tooltiptext text-sm">Show Complete Section</p>
              Watch Live Streams
            </span>
          </button>
        </div>
      )}
      {/* downloads and video play */}
      <div
        className={`w-full h-[300px] border border-[#A100FF] shadow-sm hover:drop-shadow-sm ${
          isDownloadAndPlayVideoSectionClose ? "hidden" : ""
        }   bg-[#D9D9D933] p-5 backdrop-blur-xs `}>
        <PlayAndDownloadVideo
          handleDownloadAndPlayVideoSectionVisibility={
            handleDownloadAndPlayVideoSectionVisibility
          }></PlayAndDownloadVideo>{" "}
      </div>
      {isDownloadAndPlayVideoSectionClose && (
        <div
          className={`w-full h-[30px] bg-[#D9D9D933] border border-[#A100FF] shadow-sm hover:drop-shadow-sm flex flex-row items-center justify-start p-5 backdrop-blur-xs `}>
          <button
            className="cursor-pointer  "
            onClick={() =>
              setIsDownloadAndPlayVideoSectionClose(
                !isDownloadAndPlayVideoSectionClose
              )
            }>
            <span className="tooltip">
              <p className="tooltiptext text-sm">Show Complete Section</p>
              Play and Download Videos
            </span>
          </button>
        </div>
      )}

      {/* Get our apk on PC and Mobile  */}
      <div
        className={`w-full h-[300px] border border-[#A100FF] shadow-sm hover:drop-shadow-sm ${
          isGetAppSectionClose ? "hidden" : ""
        }   bg-[#D9D9D933] p-5 backdrop-blur-xs `}>
        <GetOurApp
          handleGetAppSectionVisibility={
            handleGetAppSectionVisibility
          }></GetOurApp>{" "}
      </div>
      {isGetAppSectionClose && (
        <div
          className={`w-full h-[30px] bg-[#D9D9D933] border border-[#A100FF] shadow-sm hover:drop-shadow-sm flex flex-row items-center justify-start p-5 backdrop-blur-xs `}>
          <button
            className="cursor-pointer  "
            onClick={() => setIsGetAppSectionClose(!isGetAppSectionClose)}>
            <span className="tooltip">
              <p className="tooltiptext text-sm">Show Complete Section</p>
              Play and Download Videos
            </span>
          </button>
        </div>
      )}

      {/* <div className="w-full h-[300px]   bg-[#D9D9D933] p-5 backdrop-blur-xs ">
        <PlayAndDownloadVideo></PlayAndDownloadVideo>{" "}
      </div> */}
    </section>
  );
}
