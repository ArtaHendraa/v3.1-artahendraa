import { Link } from "react-router-dom";
import MainLayout from "../components/Layouts/Main-Layout/main";
import MobileMenu from "../components/Fragments/Menu/Mobile-Menu/mMenu";
import DesktopMenu from "../components/Fragments/Menu/Desktop-Menu/dMenu";
import ContentLayout from "../components/Layouts/Content-Layout/content";

const ErrorPage = () => {
  return (
    <MainLayout>
      <MobileMenu />
      <DesktopMenu />
      <ContentLayout>
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-3">
          <h1 className="text-7xl">
            {">"}_{"<"}
          </h1>
          <h1 className="text-xl">Page Not Found</h1>
          <Link className="mt-5 menu-active" to="/">
            Go Home
          </Link>
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
export default ErrorPage;
