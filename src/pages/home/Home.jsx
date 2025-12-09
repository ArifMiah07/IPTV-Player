import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useEffect, useState } from "react";
import FeaturesPage from "./features/Features";

export default function HomePage() {
  const [scrollPositionY, setScrollPositionY] = useState(0);
  const location = useLocation();

  const isBaseHome = location.pathname === "/home";

  console.log(location, isBaseHome);

  // get scrollY position
  useEffect(() => {
    // handle
    const handleScrollPosition = () => {
      setScrollPositionY(window.scrollY);
    };
    console.log(window.scrollY);
    // add
    window.addEventListener("scroll", handleScrollPosition);
    // cleanup
    return () => window.removeEventListener("scroll", handleScrollPosition);
  }, []);

  return (
    <section className="relative w-full h-full box-border  ">
      {/* header */}
      {/* glowing layer only positioned under header */}
      <div className="absolute top-0 left-0 w-full h-[60px] bg-[#00B3FF] blur-[300px] opacity-100 -z-10"></div>

      <header className="relative z-10 w-full  h-[60px]  lg:px-4 py-4">
        <nav
          className={`w-full z-2  fixed flex items-center justify-center  ${
            scrollPositionY >= 100
              ? " transition-all delay-75 ease-in duration-150 w-full top-0 right-0 items-center justify-center"
              : " transition-all delay-75 ease-out duration-200 top-0 right-0  w-full h-fit   "
          }`}>
          {" "}
          <Navbar scrollPositionY={scrollPositionY} />{" "}
        </nav>
      </header>
      {/* main content */}
      <main className=" relative w-full h-full min-h-[calc(100vh-60px)] grid grid-cols-12 ">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ff00ff_0%,#ff00ff_50%,#ffffff_100%)] blur-[300px] opacity-10 -z-10"></div>
        {/* sidebar */}
        {/* <section className=" col-span-2  ">
          <div></div>
        </section> */}
        {/* content */}
        <section className=" col-span-12 py-12 px-12 ">
          {isBaseHome && <FeaturesPage />}
          <Outlet />
        </section>
        {/* right sidebar */}
        {/* <section className=" col-span-1  ">
          <div></div>
        </section> */}
      </main>
    </section>
  );
}
