import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WebLayouts from "./components/Layouts/Web-Layouts/WebLayouts";

//* Content Pages Start
import HomePage from "./Pages/home";
import ProjectPage from "./Pages/project";
import CertificatePage from "./Pages/certificate";
import ErrorPage from "./Pages/error";
import EduPage from "./Pages/education";
import AboutPage from "./Pages/about";
//* Content Pages End

const router = createBrowserRouter([
  {
    path: "/",
    element: <WebLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <ProjectPage />,
      },
      {
        path: "certificate",
        element: <CertificatePage />,
      },
      {
        path: "education",
        element: <EduPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
