import { ScrollRestoration } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <div>
      {/* common layout */}
      {children}
      {/*  */}
      <ScrollRestoration />
    </div>
  );
}
