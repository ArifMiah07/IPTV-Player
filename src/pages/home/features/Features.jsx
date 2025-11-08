import { useEffect, useState } from "react";

import PlayAndDownloadVideo from "../../../components/features/PlayAndDownloadVideo";
import WatchLiveStreams from "../../../components/features/WatchLiveStreams";
import { motion, AnimatePresence } from "motion/react";

export default function FeaturesPage() {
  const [showWelcome, setShowWelcome] = useState(true);

  const [isSectionClose, setIsSectionClose] = useState(false);
  const handleSectionVisibility = () => {
    console.log("clicked");
    setIsSectionClose(!isSectionClose);
  };
  console.log(isSectionClose);

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
      <div
        className={`w-full h-[300px] ${
          isSectionClose ? "hidden" : ""
        }   bg-[#D9D9D933] p-5 backdrop-blur-xs `}>
        <WatchLiveStreams
          handleSectionVisibility={handleSectionVisibility}></WatchLiveStreams>
      </div>
      {isSectionClose && (
        <div
          className={`w-full h-[30px] bg-[#D9D9D933] flex flex-row items-center justify-start p-5 backdrop-blur-xs `}>
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

      <div className="w-full h-[300px]   bg-[#D9D9D933] p-5 backdrop-blur-xs ">
        <PlayAndDownloadVideo></PlayAndDownloadVideo>{" "}
      </div>
    </section>
  );
}
