import { createHashRouter, Outlet } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home/Home";
import LandingPage from "../pages/landing/LandingPage";
import StreamPage from "../pages/iptv-player/streams/Streams";
import IPTVPlayerPage from "../pages/iptv-player/IPTVPlayer";
import DashboardPage from "../pages/dashboard/Dashboard";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "home",
        element: <HomePage />,
        children: [
          {
            path: "iptv-player",
            element: <IPTVPlayerPage />,
            children: [
              {
                path: "streams",
                element: <StreamPage />,
              },
              {
                path: "channels",
                element: <div>This is channels page</div>,
              },
              {
                path: "saved",
                element: <div>This is saved page</div>,
              },
              {
                path: "player",
                element: <div>This is video player page</div>,
              },
              {
                path: "library",
                element: <div>This is library page</div>,
              },
              {
                path: "profile",
                element: <div>This is profile page</div>,
              },
              {
                path: "about",
                element: <div>This is about page</div>,
              },
            ],
          },
          {
            path: "video-downloader",
            element: <div>this is video downloader page <Outlet /> </div> ,
            children: [
              {
                path: "downloads",
                element: <div>download a video</div> ,
              },
            ],
          },
        ],
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
        children: [
          {
            path: "admin",
            element: <div>this is admin page <Outlet /> </div> ,
            children: [
              {
                path: "create",
                element: <div>this is admin dashboard upload page</div> ,
              },
              {
                path: "delete",
                element: <div>This is admin dashboard delete page</div>,
              },
              {
                path: "update",
                element: <div>This is admin dashboard update page</div>,
              },
              {
                path: "read",
                element: <div>This is admin dashboard read page</div>,
              },
            ],
          },
          {
            path: "user",
            element: <div>this is user page <Outlet /> </div> ,
            children: [
              {
                path: "create",
                element: <div>this is user dashboard upload page</div> ,
              },
              {
                path: "delete",
                element: <div>This is user dashboard delete page</div>,
              },
              {
                path: "update",
                element: <div>This is user dashboard update page</div>,
              },
              {
                path: "read",
                element: <div>This is user dashboard read page</div>,
              },
            ],
          },
        
        ],
      },
      {
        path: "signup",
        element: <p>register account</p>,
      },
      {
        path: "signin",
        element: <p>login in your account</p>,
      },
    ],
  },
]);

export default router;
