import MobileMenu from "./components/Fragments/Menu/Mobile-Menu/mMenu";
import MainLayout from "./components/Layouts/Main-Layout/main";
import DesktopMenu from "./components/Fragments/Menu/Desktop-Menu/dMenu";
import ContentLayout from "./components/Layouts/Content-Layout/content";

import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <MainLayout>
      <MobileMenu />
      <DesktopMenu />
      <ContentLayout>
        <Outlet />
      </ContentLayout>
    </MainLayout>
  );
};

export default App;
