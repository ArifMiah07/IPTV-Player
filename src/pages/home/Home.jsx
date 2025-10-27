import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>this is home page</h1>
      <Outlet />
    </div>
  );
}
