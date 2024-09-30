import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CssBaseline } from "@mui/material";

import { AppRoutes } from "./App";
import { ReduxProvider } from "./store/provider.tsx";

const router = createBrowserRouter(AppRoutes);

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <ReduxProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </ReduxProvider>
    </React.StrictMode>
  );
} else {
  console.error(
    "Root element not found. Make sure there is an element with id='root' in your HTML."
  );
}
