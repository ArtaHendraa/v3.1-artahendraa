/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import React, { useState, useEffect } from "react";
import LinkPage from "../../../Elements/Link-Menu/linkMenu";
import SNSLink from "../../../Elements/SNS-Link/snsLink";
import Copyright from "../../../Elements/Copyright/copyright";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const openMenuBtn = document.getElementById("open-menu-btn");
    const closeMenuBtn = document.getElementById("close-menu-btn");

    openMenuBtn.addEventListener("click", openMenu);
    closeMenuBtn.addEventListener("click", closeMenu);

    return () => {
      openMenuBtn.removeEventListener("click", openMenu);
      closeMenuBtn.removeEventListener("click", closeMenu);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <>
      <div className="absolute xl:hidden z-30 top-[1.625rem] right-5">
        <img
          className="text-[#EEEEEE] cursor-pointer w-7 h-7"
          id="open-menu-btn"
          src="icon/bars.svg"
          alt="menu"
          onClick={openMenu}
        />
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#222831] transition-transform duration-[350ms] transform ${
          isMenuOpen
            ? "translate-x-0 overflow-scroll"
            : "-translate-x-full overflow-hidden"
        } lg:hidden z-40`}
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
                <h1 className="text-lg font-semibold">Arta Hendrawan</h1>
              </a>
              <div className="relative inline-block">
                <img src="icon/verified.svg" alt="icon" />
              </div>
            </div>
          </div>
          <div className="mr-5 cursor-pointer">
            <img
              className="font-extrabold w-7 h-7"
              id="close-menu-btn"
              src="icon/closeBtn.svg"
              alt="icon"
              onClick={closeMenu}
            />
          </div>
        </div>
        <div className="mt-5 border-b border-gray-300"></div>

        <div className="flex flex-col text-[#d1d5db] gap-1 my-2 mx-5 lg:p-0">
          <LinkPage />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-5/6 border-b border-gray-500"></div>
          <div className="flex flex-row items-center justify-around gap-8 mt-5 md:gap-14">
            <SNSLink />
          </div>
          <div className="w-5/6 mt-3 border-b border-gray-500"></div>
        </div>

        <div className="flex items-center justify-center mt-1 text-xs ">
          <Copyright />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
