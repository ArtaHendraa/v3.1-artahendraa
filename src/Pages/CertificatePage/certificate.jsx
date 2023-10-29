import DesktopMenu from "../../components/Fragments/Menu/Desktop-Menu/dMenu";
import MobileMenu from "../../components/Fragments/Menu/Mobile-Menu/mMenu";
import MainLayout from "../../components/Layouts/Main-Layout/main";
import ContentLayout from "../../components/Layouts/Content-Layout/content";
import CertificateContent from "../../components/Fragments/Certificate-Content/cContent";

const CertificatePage = () => {
  return (
    <>
      <MobileMenu />
      <MainLayout>
        <DesktopMenu />
        <ContentLayout>
          <CertificateContent />
        </ContentLayout>
      </MainLayout>
    </>
  );
};
export default CertificatePage;
