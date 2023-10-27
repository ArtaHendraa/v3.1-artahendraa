import { Link } from "react-router-dom";
import BorderMenu from "../../Elements/Border-menu/border";
import HomeCardCerti from "../../Elements/Home-Certificate-Card/homeCardCerti";
import CertiLayout from "../../Layouts/Certi-Layout/certiLayout";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HomeContent = () => {
  const [text] = useTypewriter({
    words: ["Hai, Saya Arta", "Hi, I'm Arta", "こんにちは、アラタです"],
    loop: {},
    typeSpeed: 90,
    deleteSpeed: 50,
  });

  return (
    <>
      <section className="space-y-2 bg-no-repeat bg-cover">
        <div className="flex items-center gap-2 text-2xl font-medium lg:text-3xl">
          <h1 className="text-[#00ADB5] font-semibold">
            {text}
            <span>
              <Cursor />
            </span>
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

      {/* TODO:buat skil section jadi lebih simple */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xl font-medium text-neutral-300">
            <img className="mt-6" src="icon/skill.svg" alt="icon" />
            <h2 className="mt-6 capitalize">skills</h2>
          </div>
          <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center text-neutral-400">
            <p className="ml-2 capitalize text-neutral-400 md:ml-0">
              my skills.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5 xl:gap-6 md:justify-start">
          <a
            href="https://www.petanikode.com/html-dasar/"
            target="_blank"
            className="w-8"
            rel="noreferrer"
          >
            <div className="relative inline-block">
              <div className="relative">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-orange-500"
                  height="100%"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>HTML</title>
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path>
                </svg>
              </div>
            </div>
          </a>

          <a
            href="https://www.petanikode.com/css-untuk-pemula/"
            target="_blank"
            className="w-8"
            rel="noreferrer"
          >
            <div className="relative inline-block">
              <div className="relative">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-blue-500"
                  height="100%"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>CSS</title>
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path>
                </svg>
              </div>
            </div>
          </a>

          <a
            href="https://www.petanikode.com/javascript-dasar/"
            target="_blank"
            className="w-8"
            rel="noreferrer"
          >
            <div className="relative inline-block">
              <div className="relative">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-yellow-400"
                  height="100%"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>JavaScript</title>
                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
                </svg>
              </div>
            </div>
          </a>

          <a
            href="https://www.petanikode.com/bootstrap-dasar/"
            target="_blank"
            className="w-8"
            rel="noreferrer"
          >
            <div className="relative inline-block">
              <div className="relative">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="text-purple-500"
                  height="100%"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Bootstrap</title>
                  <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"></path>
                  <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z"></path>
                </svg>
              </div>
            </div>
          </a>

          <a
            href="https://www.petanikode.com/nodejs-pemula/"
            target="_blank"
            className="w-8"
            rel="noreferrer"
          >
            <div className="relative inline-block">
              <div className="relative">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-green-600"
                  height="100%"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>NodeJS</title>
                  <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"></path>
                </svg>
              </div>
            </div>
          </a>

          <a
            href="https://www.petanikode.com/tailwind-dasar/"
            target="_blank"
            className="w-8"
            rel="noreferrer"
          >
            <div className="relative inline-block">
              <div className="relative">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-cyan-300"
                  height="100%"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>TailwindCSS</title>
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                </svg>
              </div>
            </div>
          </a>

          <a
            href="https://fiancahya51.medium.com/playing-with-figma-pengenalan-figma-bagian-1-4a3d6b206350"
            target="_blank"
            className="w-8"
            rel="noreferrer"
          >
            <div className="relative inline-block">
              <div className="relative">
                <svg viewBox="0 0 128 128" className="w-8">
                  <path
                    fill="#0acf83"
                    d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
                  ></path>
                  <path
                    fill="#a259ff"
                    d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
                  ></path>
                  <path
                    fill="#f24e1e"
                    d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
                  ></path>
                  <path
                    fill="#ff7262"
                    d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                  ></path>
                  <path
                    fill="#1abcfe"
                    d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
                  ></path>
                  <title>Figma</title>
                </svg>
              </div>
            </div>
          </a>

          <a
            href="https://mui.com/"
            target="_blank"
            className="w-8"
            rel="noreferrer"
          >
            <div className="relative inline-block">
              <div className="relative">
                <svg
                  stroke="#38bdf8"
                  fill="#38bdf8"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-sky-400"
                  height="100%"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>MaterialUI</title>
                  <path d="M20.229 15.793a.666.666 0 0 0 .244-.243.666.666 0 0 0 .09-.333l.012-3.858a.666.666 0 0 1 .09-.333.666.666 0 0 1 .245-.243L23 9.58a.667.667 0 0 1 .333-.088.667.667 0 0 1 .333.09.667.667 0 0 1 .244.243.666.666 0 0 1 .089.333v7.014a.667.667 0 0 1-.335.578l-7.893 4.534a.666.666 0 0 1-.662 0l-6.194-3.542a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.335v-3.537c0-.004.004-.006.008-.004s.008 0 .008-.005v-.004c0-.003.002-.005.004-.007l5.102-2.93c.004-.003.002-.01-.003-.01a.005.005 0 0 1-.004-.002.005.005 0 0 1-.001-.004l.01-3.467a.667.667 0 0 0-.333-.58.667.667 0 0 0-.667 0L8.912 9.799a.667.667 0 0 1-.665 0l-3.804-2.19a.667.667 0 0 0-.999.577v6.267a.667.667 0 0 1-.332.577.666.666 0 0 1-.332.09.667.667 0 0 1-.333-.088L.336 13.825a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.336L.019 2.292a.667.667 0 0 1 .998-.577l7.23 4.153a.667.667 0 0 0 .665 0l7.228-4.153a.666.666 0 0 1 .333-.088.666.666 0 0 1 .333.09.667.667 0 0 1 .244.244.667.667 0 0 1 .088.333V13.25c0 .117-.03.232-.089.334a.667.667 0 0 1-.245.244l-3.785 2.18a.667.667 0 0 0-.245.245.666.666 0 0 0-.089.334.667.667 0 0 0 .09.334.666.666 0 0 0 .247.244l2.088 1.189a.67.67 0 0 0 .33.087.667.667 0 0 0 .332-.089l4.457-2.56Zm.438-9.828a.666.666 0 0 0 .09.335.666.666 0 0 0 .248.244.667.667 0 0 0 .67-.008l2.001-1.2a.666.666 0 0 0 .237-.243.667.667 0 0 0 .087-.329V2.32a.667.667 0 0 0-.091-.335.667.667 0 0 0-.584-.33.667.667 0 0 0-.334.094l-2 1.2a.666.666 0 0 0-.238.243.668.668 0 0 0-.086.329v2.445Z"></path>
                </svg>
              </div>
            </div>
          </a>

          <a
            href="https://react.dev/"
            target="_blank"
            className="w-8"
            rel="noreferrer"
          >
            <div className="relative inline-block">
              <div className="relative">
                <svg
                  stroke="#0ea5e9"
                  fill="#0ea5e9"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-sky-500"
                  height="100%"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>React JS</title>
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default HomeContent;
