import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/project",
    element: <HomePage />,
  },
  {
    path: "/certificate",
    element: <HomePage />,
  },
  {
    path: "/education",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <HomePage />,
  },
  {
    path: "/getInTouch",
    element: <HomePage />,
  },
  {
    path: "/learn",
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
