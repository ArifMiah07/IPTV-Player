import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { TestingUrlProvider } from "./contexts/ContextTestingUrl";
import { PaginationProvider } from "./contexts/PaginationContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PaginationProvider>
      <TestingUrlProvider>
        <RouterProvider router={router}></RouterProvider>
      </TestingUrlProvider>
    </PaginationProvider>
  </React.StrictMode>
);
