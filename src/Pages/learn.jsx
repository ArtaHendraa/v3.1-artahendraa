import PageHeader from "../components/Elements/Page-Header/pageHeader";
import CurrentlyLearning from "../components/Elements/learn/currentlyLearning";
import LearnJourney from "../components/Elements/learn/learnJourney";

const LearnPage = () => {
  return (
    <>
      <PageHeader
        title="Learning Journey"
        description="Hal hal yang pernah saya pelajari"
        customClass="mb-6"
      />
      <LearnJourney />

      <PageHeader
        title="Currently Learning"
        description="Fokus belajar saya saat ini"
        customClass="mb-6"
      />
      <CurrentlyLearning />
    </>
  );
};

export default LearnPage;
