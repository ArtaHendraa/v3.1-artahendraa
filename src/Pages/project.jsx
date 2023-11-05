import PageHeader from "../components/Elements/Page-Header/pageHeader";
import Card from "../components/Elements/Project-Card/Card";

const ProjectPage = () => {
  return (
    <>
      <PageHeader
        title="Projects"
        description="Semua Project yang sudah saya kerjakan"
      />
      <section className="grid grid-cols-1 gap-5 pt-2 md:grid-cols-2">
        <Card
          target="https://artahendraa.vercel.app/"
          title="v3.1-artahendraa"
          banner="visible"
          image="project-image/v3.1-artahendraa.webp"
          description="v3.1 dari artahendraa, Personal website dengan HTML, CSS, JavaScript"
          skillIcon={["js", "tailwind", "react"]}
        />

        <Card
          target="https://artahendraa.github.io/"
          title="v3-artahendraa"
          banner="visible"
          image="project-image/v3-artahendraa.webp"
          description="v3 dari artahendraa, Personal website dengan HTML, CSS, JavaScript"
          skillIcon={["html", "js", "tailwind"]}
        />

        <Card
          target="https://artahendraa.github.io/v2.ArtaHendraa/"
          title="v2-artahendraa"
          banner="hidden"
          image="project-image/v2-artahendraa.webp"
          description="v2 dari artahendraa, Personal website dengan HTML, CSS, JavaScript"
          skillIcon={["html", "css", "js"]}
        />

        <Card
          target="https://artahendraaa.artahenda.repl.co"
          title="v1-artahendraa"
          banner="hidden"
          image="project-image/v1-artahendraa.webp"
          description="v1 dari artahendraa, Personal website dengan HTML, CSS, JavaScript"
          skillIcon={["html", "css", "js"]}
        />
      </section>
    </>
  );
};
export default ProjectPage;
