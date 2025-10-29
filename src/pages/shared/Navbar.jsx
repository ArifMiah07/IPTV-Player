import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Navbar({ scrollPositionY }) {
  const user = true;
  // states
  const [isDark, setIsDark] = useState(true);
  // functionalities
  function handleToggleTheme() {
    setIsDark(!isDark);
  }
  const isAdmin = true;

  console.log(scrollPositionY);

  return (
    // This is Navigation bar
    /**
     * This Navigation bar will use in Home routes in home page
     */
    <div
      className={`  ${
        scrollPositionY >= 100
          ? " transition-all delay-75 ease-in duration-150 bg-white/30 backdrop-blur-sm rounded-full px-6 py-2 w-fit flex flex-row gap-6 items-center justify-center border border-yellow-50 "
          : " transition-all delay-75 ease-out duration-200 bg-white/30 backdrop-blur-md px-6 py-3 z-3 w-full h-full flex flex-row items-center justify-between gap-6"
      } `}>
      {/* logo */}
      <div
        className={`flex flex-row items-center justify-center ${
          scrollPositionY >= 100 ? "hidden" : ""
        } `}>
        <span>IPTV Player</span>
      </div>
      {/* menu */}
      <div
        className={`flex items-center ${
          scrollPositionY >= 100 ? " w-full  justify-end" : ""
        }`}>
        <ul className="flex flex-row items-center gap-6 ">
          <li>
            <Link to={`/home`}>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to={`/streams`}>
              <span>Streams</span>
            </Link>
          </li>
          <li>
            <Link to={`/channels`}>
              <span>Channels</span>
            </Link>
          </li>
          <li>
            <Link to={`/saved`}>
              <span>Saved</span>
            </Link>
          </li>
          <li>
            <Link to={`/player`}>
              <span>Player</span>
            </Link>
          </li>
          <li>
            <Link to={`/library`}>
              <span>Library</span>
            </Link>
          </li>
          <li className={`${scrollPositionY >= 100 ? "hidden" : ""}`}>
            <Link to={`/about`}>
              <span>About</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* user specific */}
      <div
        className={`flex items-center ${
          scrollPositionY >= 100 ? " w-full  justify-end" : ""
        }`}>
        <ul className="flex flex-row items-center gap-6 ">
          <li className={`${scrollPositionY >= 100 ? "hidden" : ""}`}>
            <Link to={`/dashboard`}>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to={`/profile`}>
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to={`/signout`}>
              <span>Signout</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* extra */}
      <div
        className={` flex items-center justify-center  ${
          scrollPositionY >= 100
            ? "flex flex-row items-center justify-center gap-6 "
            : "flex flex-row items-center justify-center gap-6"
        }`}>
        <button
          className=" cursor-pointer flex w-full items-center justify-center"
          onClick={handleToggleTheme}>
          {isDark ? (
            <span className="flex items-center justify-center">
              <MdLightMode />
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <MdDarkMode />
            </span>
          )}
        </button>
        <button
          className={`flex w-full items-center justify-center ${
            scrollPositionY >= 100 ? "hidden" : ""
          } `}>
          <a href={"https://arif-miah-portfolio.vercel.app/"} target="_blank">
            <span>Portfolio</span>
          </a>
        </button>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  scrollPositionY: PropTypes.number.isRequired,
};
