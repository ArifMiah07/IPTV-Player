// src/utils/streamHelper.js
const isTauri = typeof window !== "undefined" && "__TAURI__" in window;
const PROXY_URL =
  import.meta.env.VITE_PROXY_URL || "http://localhost:5000/api/iptv-player";

console.log("🔍 Environment:", {
  isTauri,
  PROXY_URL,
  VITE_PROXY_URL: import.meta.env.VITE_PROXY_URL,
  allEnv: import.meta.env,
});

/**
 * Get the playable stream URL
 * - In Tauri: Return original URL (no CORS issue)
 * - In Web: Return proxied URL (fixes CORS + mixed content)
 */
export const getPlayableStreamUrl = (originalUrl) => {
  if (!originalUrl) {
    console.warn("⚠️ No URL provided");
    return "";
  }

  // Native app: Use direct URL
  if (isTauri) {
    console.log("📱 Tauri mode - Direct URL:", originalUrl);
    return originalUrl;
  }

  // Web app: ALWAYS use proxy
  const proxiedUrl = `${PROXY_URL}/proxy-stream?url=${encodeURIComponent(
    originalUrl
  )}`;
  console.log("🌐 Web mode - Proxied URL:", {
    original: originalUrl,
    proxied: proxiedUrl,
  });

  return proxiedUrl;
};
