/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";
import LinkPage from "../../../Elements/Link-Menu/linkMenu";
import SNSLink from "../../../Elements/SNS-Link/snsLink";

const MobileMenu = () => {
  useEffect(() => {
    const openMenuBtn = document.getElementById("open-menu-btn");
    const closeMenuBtn = document.getElementById("close-menu-btn");
    const humMenu = document.getElementById("hum-menu");

    openMenuBtn.addEventListener("click", () => {
      humMenu.style.left = "0%";
      document.body.style.overflow = "hidden";
      humMenu.style.overflow = "scroll";
    });

    closeMenuBtn.addEventListener("click", () => {
      document.body.style.overflow = "auto";
      humMenu.style.left = "-100%";
    });
  }, []);

  return (
    <>
      <div className="relative z-[999] lg:hidden top-[1.625rem] right-5">
        <img
          className="absolute right-0 text-[#EEEEEE] cursor-pointer w-7 h-7"
          id="open-menu-btn"
          src="icon/bars.svg"
          alt="menu"
        />
      </div>
      <div
        className="fixed z-[9999] bg-[#222831] transition-all ease-in-out duration-[350ms] left-[-100%] w-full h-full lg:hidden "
        id="hum-menu"
      >
        <div className="flex items-center justify-between gap-4 mt-5 ml-5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10">
              <img
                alt="profile"
                loading="lazy"
                width="100"
                height="100"
                className="duration-700 ease-in-out scale-100 rounded-full"
                src="profile-image/profile-image-1.jpg"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="flex items-center gap-2 mt-1">
              <a href="#">
                <h1 className="flex-grow text-lg font-semibold">
                  Arta Hendrawan
                </h1>
              </a>
              <div className="relative inline-block">
                <div className="relative">
                  <img src="icon/verified.svg" alt="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="z-[999] cursor-pointer mr-5">
            <img
              className="font-extrabold w-7 h-7"
              id="close-menu-btn"
              src="icon/closeBtn.svg"
              alt="icon"
            />
          </div>
        </div>
        <div className="mt-5 border-b border-gray-300"></div>

        <div className="flex flex-col lg:p-0 text-[#d1d5db] gap-1 my-2 mx-5">
          <LinkPage />
          <LinkPage />
          <LinkPage />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-[90%]  border-b border-gray-500"></div>
          <div className="flex flex-row items-center justify-around gap-8 mt-5 md:gap-14">
            <SNSLink />
          </div>
          <div className="w-[90%] mt-4 border-b border-gray-500"></div>
        </div>

        <div className="flex items-center justify-center mt-2 text-sm text-neutral-500">
          <span>
            &copy;&nbsp;2023 with&nbsp;
            <span className="text-red-500 animate-pulse">❤</span>
            <span>&nbsp;by&nbsp;</span>
            <span className="duration-300 cursor-wait hover:text-[#FFCF01]">
              Arta Hendrawan
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
