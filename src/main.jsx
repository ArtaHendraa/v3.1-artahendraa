import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MobileMenu from "./components/Fragments/Menu/Mobile-Menu/mMenu";
import MainLayout from "./components/Layouts/Main-Layout/main";
import DesktopMenu from "./components/Fragments/Menu/Desktop-Menu/dMenu";
import ContentLayout from "./components/Layouts/Content-Layout/content";

//* Content Pages Start
import HomePage from "./Pages/HomePage/home";
import ProjectPage from "./Pages/ProjectPage/project";
import CertificatePage from "./Pages/CertificatePage/certificate";
import ErrorPage from "./Pages/ErrorPage/error";
//* Content Pages End

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/projects",
    element: <ProjectPage />,
  },
  {
    path: "/certificate",
    element: <CertificatePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <MainLayout>
      <MobileMenu />
      <DesktopMenu />
      <ContentLayout>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </ContentLayout>
    </MainLayout>
  </>
);
