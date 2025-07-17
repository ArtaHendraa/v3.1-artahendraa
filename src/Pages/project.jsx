import PageHeader from "../components/Elements/Page-Header/pageHeader";
import Card from "../components/Elements/Project-Card/Card";

const ProjectPage = () => {
  return (
    <>
      <PageHeader
        title="Projects"
        description="Semua Project yang sudah saya kerjakan"
        customClass="mb-6"
      />
      <section className="grid grid-cols-1 gap-5 pt-2 md:grid-cols-2">
        <Card
          target="https://norime.vercel.app/"
          title="norime"
          banner="visible"
          image="project-image/norime.png"
          description="Website yang menampilkan data anime terbaru, yang diambil dari jikan.api"
          skillIcon={["javaScript", "Tailwind", "React JS", "Vite"]}
        />

        <Card
          target="https://github.com/orgs/dezumedia/repositories"
          title="Dezu Media"
          banner="visible"
          image="project-image/dezu-media.png"
          description="Website portal berita yang dibuat dengan next js, dan strapi sebagai headless cms"
          skillIcon={["Next JS", "Tailwind"]}
        />

        <Card
          target="https://artahendraa.github.io/v2.ArtaHendraa/"
          title="v2-artahendraa"
          banner="hidden"
          image="project-image/v2-artahendraa.webp"
          description="v2 dari artahendraa, Personal website dengan HTML, CSS, JavaScript"
          skillIcon={["HTML", "CSS", "javaScript"]}
        />

        <Card
          target="https://artahendraaa.artahenda.repl.co"
          title="v1-artahendraa"
          banner="hidden"
          image="project-image/v1-artahendraa.webp"
          description="v1 dari artahendraa, Personal website dengan HTML, CSS, JavaScript"
          skillIcon={["HTML", "CSS", "javaScript"]}
        />
      </section>
    </>
  );
};
export default ProjectPage;
