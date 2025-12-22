import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { TestingUrlProvider } from "./contexts/ContextTestingUrl";
import { PaginationProvider } from "./contexts/PaginationContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PaginationProvider>
        <TestingUrlProvider>
          <RouterProvider router={router}></RouterProvider>
        </TestingUrlProvider>
      </PaginationProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
