import { Link } from "react-router-dom";
import BorderMenu from "../../Elements/Border-menu/border";
import HomeCardCerti from "../../Elements/Home-Certificate-Card/homeCardCerti";
import CertiLayout from "../../Layouts/Certi-Layout/certiLayout";

const HomeContent = () => {
  return (
    <>
      <section className="space-y-2 bg-no-repeat bg-cover">
        <div className="flex items-center gap-2 text-2xl font-medium lg:text-3xl">
          <h1 className="auto-type text-[#00ADB5] font-semibold">
            HI, I`m Arta
          </h1>
        </div>
        <div className="space-y-4">
          <ul className="flex flex-col gap-1 ml-5 list-disc lg:flex-row lg:gap-9 text-neutral-400">
            <li>Student</li>
            <li>Based in Denpasar, Bali, Indonesia</li>
          </ul>
          <p className="leading-[1.8] md:leading-loose text-neutral-300">
            Siswa SMA yang bersemangat dan berminat dalam dunia teknologi,
            khususnya dalam bidang pemrograman, saat ini tengah fokus
            mempelajari berbagai aspek teknologi Web.
          </p>
        </div>
      </section>

      <BorderMenu />

      <section className="space-y-6 ">
        <div className="space-y-2">
          <div className="flex items-center gap-1 text-xl font-medium text-neutral-300">
            <img className="mt-3" src="icon/certi.svg" alt="icon" />
            <h2 className="mt-3 capitalize">certificate</h2>
          </div>
          <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center text-neutral-400">
            <p className="capitalize text-neutral-400">my certificate</p>
            <Link
              to="/certificate"
              className="flex items-center gap-1 transition-all duration-300 hover:gap-2 text-neutral-500 hover:text-neutral-300"
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
          <HomeCardCerti
            image="certificate-image/Dicoding.webp"
            name="Dicoding"
            title="Visualisasi Data"
            date="28 Juli 2023"
            alt="dicoding"
            target="https://www.dicoding.com/certificates/81P23MK0NXOY"
          />
          <HomeCardCerti
            image="certificate-image/Dicoding.webp"
            name="Dicoding"
            title="Programming Logic"
            date="24 Juli 2023"
            alt="dicoding"
            target="https://www.dicoding.com/certificates/MRZMQRMR3PYQ"
          />
          <HomeCardCerti
            image="certificate-image/freeCodeCamp.webp"
            name="freeCodeCamp"
            title="JavaScript"
            date="on progress"
            alt="freeCodeCamp"
            target="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
          />
          <HomeCardCerti
            image="certificate-image/freeCodeCamp.webp"
            name="freeCodeCamp"
            title="Relational Database"
            date="on progress"
            alt="freeCodeCamp"
            target="https://www.freecodecamp.org/learn/relational-database/"
          />
        </CertiLayout>

        <BorderMenu />
      </section>
    </>
  );
};

export default HomeContent;
