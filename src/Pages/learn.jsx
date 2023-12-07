import PageHeader from "../components/Elements/Page-Header/pageHeader";
import LearnList from "../components/Elements/Learn-List/learnList";

const LearnPage = () => {
  const iconJourney = [
    "Java",
    "Kotlin",
    "Dart",
    "Flutter",
    "Photoshop",
    "Illustrator",
    "Bootstrap",
    "Ubuntu OS",
  ];

  const iconLearn = [
    "javaScript",
    "Tailwind",
    "Node JS",
    "React JS",
    "Typescript",
    "Next JS",
    "Figma",
    "PostgreSQL",
    "mySQL",
    "Redux",
  ];

  return (
    <>
      <PageHeader
        title="Learning Journey"
        description="Hal yang pernah saya pelajari, namun tidak saya lanjutkan"
        customClass="mb-6"
      />
      <div className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-3">
        <LearnList size="w-6 h-6" selectedIconIds={`${iconJourney}`} />
      </div>

      <PageHeader
        title="Currently Learning"
        description="Fokus belajar saya saat ini"
        customClass="mb-6"
      />
      <div className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-3">
        <LearnList size="w-6 h-6" selectedIconIds={`${iconLearn}`} />
      </div>
    </>
  );
};

export default LearnPage;
