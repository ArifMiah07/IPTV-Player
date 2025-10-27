import { createHashRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home/Home";
import LandingPage from "../pages/landing/LandingPage";
import StreamPage from "../pages/iptv-player/streams/Streams";
import IPTVPlayerPage from "../pages/iptv-player/IPTVPlayer";

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
