// src/components/StreamList.jsx
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Player } from "./Player";

const isTauri = typeof window !== "undefined" && "__TAURI__" in window;
const API_BASE =
  import.meta.env.VITE_PROXY_URL || "http://localhost:5000/api/iptv-player";

export const StreamList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStream, setSelectedStream] = useState(null);
  const channelsPerPage = 10;

  // Fetch streams
  const { data, isLoading, error } = useQuery({
    queryKey: ["iptv-streams", currentPage, channelsPerPage],
    queryFn: async () => {
      if (isTauri) {
        // Tauri: Fetch directly
        const { fetch: tauriFetch } = await import("@tauri-apps/plugin-http");
        const response = await tauriFetch(
          "https://iptv-org.github.io/api/streams.json"
        );
        const allStreams = await response.json();

        // Do pagination client-side
        const totalItems = allStreams.length;
        const numberOfPages = Math.ceil(totalItems / channelsPerPage);
        const startIndex = (currentPage - 1) * channelsPerPage;
        const endIndex = currentPage * channelsPerPage;
        const paginatedStreams = allStreams.slice(startIndex, endIndex);

        return {
          status: true,
          data: paginatedStreams,
          totalItems,
          totalPages: numberOfPages,
          currentPage,
          itemsPerPage: channelsPerPage,
        };
      } else {
        // Web: Use backend
        const response = await axios.get(`${API_BASE}/streams`, {
          params: { currentPage, channelsPerPage },
        });
        return response.data;
      }
    },
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) return <div className="p-4">Loading streams...</div>;
  if (error)
    return <div className="p-4 text-red-600">Error: {error.message}</div>;

  return (
    <div className="flex flex-col h-screen">
      {/* Player Section */}
      {selectedStream && (
        <div className="h-1/2 bg-black">
          <Player stream_item={selectedStream} />
        </div>
      )}

      {/* Stream List */}
      <div className="flex-1 overflow-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.data?.map((stream, index) => (
            <div
              key={`${stream.url}-${index}`}
              className="border rounded p-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => setSelectedStream(stream)}>
              <h3 className="font-semibold truncate">
                {stream.channel || "Unknown Channel"}
              </h3>
              <p className="text-sm text-gray-600 truncate">{stream.url}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300">
            Previous
          </button>
          <span className="text-sm">
            Page {currentPage} of {data?.totalPages || 1}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(data?.totalPages || 1, prev + 1)
              )
            }
            disabled={currentPage === data?.totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
