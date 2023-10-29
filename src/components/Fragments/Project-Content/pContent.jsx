import PageHeader from "../../Elements/Page-Header/pageHeader";

const ProjectContent = () => {
  return (
    <>
      <PageHeader
        title="Projects"
        description="Semua Project yang sudah saya kerjakan"
      />
      <section className="grid grid-cols-1 gap-5 pt-2 md:grid-cols-2"></section>
    </>
  );
};
export default ProjectContent;
