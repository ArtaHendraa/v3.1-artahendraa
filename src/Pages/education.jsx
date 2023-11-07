import PageHeader from "../components/Elements/Page-Header/pageHeader";
import Timeline from "../components/Elements/Timeline/timeline";

const EduPage = () => {
  return (
    <>
      <PageHeader title="Education" description="Riwayat pendidikan saya" />

      <ol className="relative ml-4 border-l border-gray-600">
        <Timeline
          name="SD No. 3 Kerobokan"
          year="2012 - 2014"
          location="Jl. Raya Kesambi, Kerobokan, Kec. Kuta Utara, Kabupaten Badung, Bali"
          color="bg-gray-500"
        />
        <Timeline
          name="SD No. 1 Gubug"
          year="2014 - 2018"
          location="Jl. Pantai Yeh Gangga I, Gubug, Kec. Tabanan, Kabupaten Tabanan, Bali"
          color="bg-gray-500"
        />
        <Timeline
          name="SMP Bintang Persada Denpasar"
          year="2018 - 2021"
          location="Jl. Gn. Catur I No.4, Padangsambian Kaja, Kec. Denpasar Barat, Kota Denpasar, Bali"
          color="bg-gray-500"
        />
        <Timeline
          name="SMA Saraswati 1 Denpasar"
          year="2021 - Present"
          location="Jl. Kamboja No.11A, Dangin Puri Kangin, Kec. Denpasar Utara, Kota Denpasar, Bali"
          color="bg-[#FFCF01]"
        />
      </ol>
    </>
  );
};

export default EduPage;
