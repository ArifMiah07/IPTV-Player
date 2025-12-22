// src/components/Player.jsx
import { useState, useEffect, useRef } from "react";
import Hls from "hls.js";
import { getPlayableStreamUrl } from "../../utils/streamHelper";

export const Player = ({ stream_item }) => {
  const [error, setError] = useState(null);
  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  const streamUrl = getPlayableStreamUrl(stream_item.url);

  useEffect(() => {
    if (!videoRef.current || !streamUrl) return;

    const video = videoRef.current;

    // Clean up previous HLS instance
    if (hlsRef.current) {
      hlsRef.current.destroy();
    }

    if (streamUrl.includes(".m3u8")) {
      // HLS stream
      if (Hls.isSupported()) {
        const hls = new Hls({
          xhrSetup: function (xhr, url) {
            xhr.withCredentials = false;
          },
          enableWorker: true,
          debug: false,
        });

        hlsRef.current = hls;

        hls.loadSource(streamUrl);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log("✅ HLS manifest loaded");
          video.play().catch((e) => console.log("Autoplay prevented:", e));
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
          console.error("❌ HLS Error:", data);
          if (data.fatal) {
            setError(`Stream error: ${data.type}`);
          }
        });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // Native HLS support (Safari)
        video.src = streamUrl;
        video.addEventListener("loadedmetadata", () => {
          console.log("✅ Native HLS loaded");
          video.play().catch((e) => console.log("Autoplay prevented:", e));
        });
      } else {
        setError("HLS not supported in this browser");
      }
    } else {
      // Direct video file
      video.src = streamUrl;
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [streamUrl]);

  if (error) {
    return (
      <div className="flex items-center justify-center h-full bg-red-50 text-red-600 p-4">
        <div className="text-center">
          <p className="font-semibold">❌ Stream Error</p>
          <p className="text-sm mt-2">{error}</p>
          <button
            onClick={() => {
              setError(null);
              window.location.reload();
            }}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col bg-black">
      <video
        ref={videoRef}
        controls
        className="w-full h-full"
        style={{ maxHeight: "100%" }}
      />
    </div>
  );
};
