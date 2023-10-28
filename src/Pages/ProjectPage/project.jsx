/* eslint-disable react/no-unknown-property */
import DesktopMenu from "../../components/Fragments/Menu/Desktop-Menu/dMenu";
import MobileMenu from "../../components/Fragments/Menu/Mobile-Menu/mMenu";
import MainLayout from "../../components/Layouts/Main-Layout/main";
import ContentLayout from "../../components/Layouts/Content-Layout/content";

const ProjectPage = () => {
  return (
    <>
      <MobileMenu />
      <MainLayout>
        <DesktopMenu />
        <ContentLayout></ContentLayout>
      </MainLayout>
    </>
  );
};
export default ProjectPage;
