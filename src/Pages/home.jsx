import { Link } from "react-router-dom";
import BorderMenu from "../components/Elements/Border-menu/border";
import CardCerti from "../components/Elements/Home-Certificate-Card/CardCerti";
import CertiLayout from "../components/Layouts/Certi-Layout/certiLayout";
import SkillList from "../components/Elements/Skill-List/skillList";

const Introduce = () => {
  return (
    <section className="space-y-2 bg-no-repeat bg-cover">
      <div className="flex items-center gap-2 text-2xl font-medium lg:text-3xl">
        <h1 className="text-[#FFCF01] font-semibold">Hi, I&apos;m Arta</h1>
      </div>
      <div className="space-y-4">
        <ul className="flex flex-col gap-1 ml-5 list-disc lg:flex-row lg:gap-9 text-neutral-400">
          <li>Student</li>
          <li>Based in Denpasar, Bali, Indonesia</li>
        </ul>
        <p className="leading-[1.8] md:leading-loose text-neutral-300">
          Mahasiswa yang bersemangat dan berminat dalam dunia teknologi,
          khususnya dalam bidang pemrograman, saat ini tengah fokus mempelajari
          berbagai aspek teknologi Web.
        </p>
      </div>
      <BorderMenu display="block" />
    </section>
  );
};

const DisplayCertificate = () => {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-1 text-xl font-medium text-neutral-300">
          <img className="mt-3" src="icon/certi.svg" alt="icon" />
          <h2 className="mt-3 text-white capitalize">certificate</h2>
        </div>
        <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center text-neutral-400">
          <p className="capitalize text-neutral-400">my certificate</p>
          <Link
            to="/certificate"
            className="flex items-center gap-1 transition-all duration-300 hover:gap-2 text-neutral-400 hover:text-neutral-300"
          >
            <span>See More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </Link>
        </div>
      </div>

      <CertiLayout>
        <CardCerti selectCerti={[1, 2, 3, 6]} />
      </CertiLayout>

      <BorderMenu display="block" />
    </section>
  );
};

function DisplaySkill() {
  const selectedIconIds = [
    "HTML",
    "CSS",
    "javaScript",
    "Bootstrap",
    "Node JS",
    "Tailwind",
    "Figma",
    "Material UI",
    "React JS",
  ];
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xl font-medium text-neutral-300">
          <img className="mt-6" src="icon/skill.svg" alt="icon" />
          <h2 className="mt-6 text-white capitalize">skills</h2>
        </div>
        <p className="capitalize text-neutral-400 md:ml-0">my skills</p>
      </div>

      <div className="flex flex-wrap justify-center gap-5 md:justify-start">
        <SkillList size="w-8" selectedIconIds={selectedIconIds} />
      </div>
    </section>
  );
}

const HomePage = () => {
  return (
    <>
      <Introduce />
      <DisplayCertificate />
      <DisplaySkill />
    </>
  );
};

export default HomePage;
