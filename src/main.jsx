import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage/home";
import ProjectPage from "./Pages/ProjectPage/project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/project",
    element: <ProjectPage />,
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
    path: "/blog",
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
