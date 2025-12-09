import { Outlet } from "react-router-dom";

export default function IPTVPlayerPage() {
  return (
    <div className="w-full h-full border border-red-500">
      {/* <h1>this is IPTV player page</h1> */}
      <Outlet />
    </div>
  );
}
