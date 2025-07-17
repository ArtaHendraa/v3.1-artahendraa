import PageHeader from "../components/Elements/Page-Header/pageHeader";
import Timeline from "../components/Elements/Timeline/timeline";

const EduPage = () => {
  return (
    <>
      <PageHeader
        title="Education"
        description="Riwayat pendidikan saya"
        customClass="mb-6"
      />

      <ol className="relative ml-4 border-l border-gray-600">
        <Timeline
          name="SMA Saraswati 1 Denpasar"
          year="2021 - 2024"
          location="Jl. Kamboja No.11A, Dangin Puri Kangin, Kec. Denpasar Utara, Kota Denpasar, Bali"
          color="bg-gray-500"
        />
        <Timeline
          name="INSTIKI"
          year="2024 - Present"
          location="Jl. Kamboja No.11A, Dangin Puri Kangin, Kec. Denpasar Utara, Kota Denpasar, Bali"
          color="bg-[#FFCF01]"
        />
      </ol>
    </>
  );
};

export default EduPage;
