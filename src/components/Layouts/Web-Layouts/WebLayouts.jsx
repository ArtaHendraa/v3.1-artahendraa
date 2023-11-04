import MobileMenu from "../../Fragments/Menu/Mobile-Menu/mMenu";
import MainLayout from "../Main-Layout/main";
import DesktopMenu from "../../Fragments/Menu/Desktop-Menu/dMenu";
import ContentLayout from "../Content-Layout/content";

import { Outlet } from "react-router-dom";

const WebLayouts = () => {
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

export default WebLayouts;
