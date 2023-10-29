/* eslint-disable react/no-unknown-property */
// import React from "react";
import LinkPage from "../../../Elements/Link-Menu/linkMenu";
import BorderMenu from "../../../Elements/Border-menu/border";
import Copyright from "../../../Elements/Copyright/copyright";
// import SNSLink from "../../../Elements/SNS-Link/snsLink";
const DesktopMenu = () => {
  return (
    <>
      <header>
        <div className="sticky top-0 z-10 flex flex-col transition-all duration-300 lg:py-8">
          <div className="z-20 shadow-sm xl:shadow-none lg:border-none border-b border-gray-500 lg:!bg-transparent w-full p-5 lg:relative lg:p-0">
            <div className="flex items-start justify-between lg:flex-col lg:space-y-4">
              <div className="flex items-center lg:items-start gap-4 lg:gap-0.5 flex-grow lg:flex-col w-full">
                <div className="w-10 h-10 overflow-hidden rounded-full xl:w-[85px] xl:h-[85px]">
                  <img
                    alt="profile"
                    loading="lazy"
                    width="85"
                    height="85"
                    className="duration-700 ease-in-out scale-100 rounded-full blur-0 grayscale-0 lg:hover:scale-125"
                    src="profile-image/profile-image-1.jpg"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="flex items-center gap-2 mt-1 lg:mt-4">
                  <div>
                    <h1 className="flex-grow text-lg font-semibold lg:text-lg">
                      Arta Hendrawan
                    </h1>
                  </div>
                  <div className="relative inline-block">
                    <div className="relative">
                      <img src="icon/verified.svg" alt="icon" />
                    </div>
                  </div>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="hidden text-sm transition-all duration-300 xl:inline-block text-neutral-400 hover:text-neutral-300"
                  href="https://github.com/ArtaHendraa"
                >
                  @ArtaHendraa
                </a>
              </div>
              {/* <div className="items-center justify-between hidden w-full mt-4 xl:flex">
                <div className="items-center gap-2 xl:flex">
                  <div className="relative w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                  <div className="absolute w-2 h-2 bg-green-400 rounded-full left-[2px] animate-ping"></div>
                  <div className="absolute w-2 h-2 bg-green-400 rounded-full left-[2px]"></div>
                  <span className="w-full text-sm text-neutral-400">
                    Student&nbsp;|&nbsp;Programmer
                  </span>
                </div> */}
              {/* clock  */}
              {/* <Clock /> */}
              {/* clock  */}
              {/* </div> */}
            </div>

            <BorderMenu display="hidden xl:block" />

            <div className="hidden lg:flex flex-col space-y-1 lg:p-0 text-[#d1d5db]">
              <LinkPage />
            </div>

            <BorderMenu display="hidden xl:block" />

            {/* 
            <div className="flex-col hidden space-y-1 lg:flex">
              <div className="mt-1 mb-1 text-sm text-neutral-400">
                Let`s Connect
              </div>
              <div className="flex justify-around px-5 pt-2 lg:justify-between">
                <SNSLink />
              </div>
            </div> */}

            {/* <BorderMenu /> */}

            <div className="items-center justify-center hidden gap-1 py-1 text-xs w-[230px] xl:flex text-[#d1d5db]">
              <Copyright />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

// const Clock = () => {
//   const [hours, setHours] = React.useState(0);
//   const [minutes, setMinutes] = React.useState(0);
//   const [ampm, setAmpm] = React.useState("");

//   function updateClock() {
//     const currentTime = new Date();
//     const currentHours = currentTime.getHours();
//     const ampm = currentHours >= 12 ? "PM" : "AM";

//     // conversion to 12 hours
//     const convertedHours = currentHours % 12;
//     const convertedHoursString = convertedHours
//       ? convertedHours < 10
//         ? "0" + convertedHours
//         : convertedHours
//       : 12;

//     // always show 2 digits for hours and minutes
//     let hours =
//       (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
//     const minutes =
//       (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();

//     // add condition to ensure that hours is always 2 digits
//     hours = convertedHours ? convertedHoursString : 12;

//     // set hours to state
//     setHours(hours);
//     setMinutes(minutes);
//     setAmpm(ampm);
//   }

//   React.useEffect(() => {
//     updateClock();
//     const interval = setInterval(updateClock, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="text-sm font-semibold">
//       <span>
//         {hours}&nbsp;:&nbsp;{minutes}&nbsp;{ampm}
//       </span>
//     </div>
//   );
// };

export default DesktopMenu;
