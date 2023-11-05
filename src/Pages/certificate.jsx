import CardCerti from "../components/Elements/Home-Certificate-Card/CardCerti";
import PageHeader from "../components/Elements/Page-Header/pageHeader";

const CertificatePage = () => {
  return (
    <>
      <PageHeader
        title="Certificate"
        description="Sertifikat yang saya miliki"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <CardCerti selectCerti={[1, 2, 3, 4, 5, 6, 7]} />
      </div>
    </>
  );
};
export default CertificatePage;
