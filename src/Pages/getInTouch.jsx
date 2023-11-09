import PageHeader from "../components/Elements/Page-Header/pageHeader";
import SNSLink from "../components/Elements/SNS-Link/snsLink";

const GetInTouchPage = () => {
  return (
    <>
      <PageHeader
        title="Certificate"
        description="Sertifikat yang saya miliki"
        mb="mb-6"
      />

      <div className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-3">
        <SNSLink />
      </div>
    </>
  );
};

export default GetInTouchPage;
