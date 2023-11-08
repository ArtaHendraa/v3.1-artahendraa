import PageHeader from "../components/Elements/Page-Header/pageHeader";

const AboutPage = () => {
  return (
    <>
      <PageHeader
        title="About Me"
        description="Informasi tentang saya"
        mb="mb-2"
      />
      <div>
        <p className="mb-10 md:leading-loose text-neutral-300">
          Hai, nama saya Arta Hendrawan. Terima kasih telah mengunjungi website
          saya. Saat ini, saya berusia 17 tahun dan saya seorang siswa kelas 3
          SMA. Hobi saya adalah membuat program, dan sesekali saya menikmati
          menonton film, anime, serta membaca manga. Ini adalah perkenalan
          singkat tentang diri saya 👋🏻.
        </p>
      </div>

      <PageHeader
        title="My Devices"
        description="Devices yang saya gunakan saat ini"
        mb="mb-2"
      />
      <div className="mt-5">
        <div className="flex items-center gap-2 mb-1">
          <svg
            className="w-8 h-8 text-neutral-300"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="3" y1="19" x2="21" y2="19" />
            <rect x="5" y="6" width="14" height="10" rx="1" />
          </svg>
          <p className="leading-[1.8] md:leading-loose text-neutral-300">
            ASUS Vivobook 14 M413DA
          </p>
        </div>

        <div className="flex items-center gap-2 mb-1">
          <svg
            className="w-8 h-8 text-neutral-300"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="7" y="4" width="10" height="16" rx="1" />
            <line x1="11" y1="5" x2="13" y2="5" />
            <line x1="12" y1="17" x2="12" y2="17.01" />
          </svg>
          <p className="leading-[1.8] md:leading-loose text-neutral-300">
            IPhone 11
          </p>
        </div>

        <div className="flex items-center gap-2 mb-1">
          <svg
            className="w-8 h-8 text-neutral-300"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="7" y="4" width="10" height="16" rx="1" />
            <line x1="11" y1="5" x2="13" y2="5" />
            <line x1="12" y1="17" x2="12" y2="17.01" />
          </svg>
          <p className="leading-[1.8] md:leading-loose text-neutral-300">
            Redmi Note 7
          </p>
        </div>

        <div className="flex items-center gap-2 mb-1">
          <svg
            className="w-8 h-8 text-neutral-300"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="7" y="4" width="10" height="16" rx="4" />
            <line x1="12" y1="8" x2="12" y2="11" />
          </svg>
          <p className="leading-[1.8] md:leading-loose text-neutral-300">
            Logitech M331 Wireless Mouse
          </p>
        </div>

        <div className="flex items-center gap-2 mb-1">
          <svg
            className="w-8 h-8 text-neutral-300"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <line x1="7" y1="8" x2="7" y2="8.01" />
            <line x1="12" y1="8" x2="12" y2="8.01" />
            <line x1="17" y1="8" x2="17" y2="8.01" />
            <line x1="7" y1="12" x2="7" y2="12.01" />
            <line x1="12" y1="12" x2="12" y2="12.01" />
            <line x1="17" y1="12" x2="17" y2="12.01" />
            <line x1="7" y1="16" x2="17" y2="16" />
          </svg>
          <p className="leading-[1.8] md:leading-loose text-neutral-300">
            Rexus MX 3.2 Keyboard
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
