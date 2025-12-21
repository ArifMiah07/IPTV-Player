// src/constants/url.js
const baseUrl = import.meta.env.VITE_BASE_URL;

export const API_URL = {
  streams_api_url: `${baseUrl}/api/iptv-player/streams`,
  proxy_stream_url: `${baseUrl}/api/iptv-player/proxy-stream`,
};

export const getProxiedUrl = (originalUrl) => {
  const isTauri = "__TAURI__" in window;
  return isTauri
    ? `${API_URL.proxy_stream_url}?url=${encodeURIComponent(originalUrl)}`
    : originalUrl;
};
