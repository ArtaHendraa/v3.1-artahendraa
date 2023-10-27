/* eslint-disable react/no-unknown-property */
const MobileMenu = () => {
  return (
    <>
      {/* Mobile Menu Start */}
      <div className="relative z-[999] lg:hidden top-[1.625rem] right-5">
        <img
          className="absolute right-0 text-[#EEEEEE] cursor-pointer w-7 h-7"
          id="open-menu-btn"
          src="icon/bars.svg"
          alt="menu"
        />
      </div>

      <div
        className="fixed z-[9999] bg-[#222831] transition-all ease-in-out duration-500 left-[-100%] w-full h-full lg:hidden"
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
                  <img src="assets/svg/verified.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="z-[999] cursor-pointer mr-5">
            <img
              className="font-extrabold w-7 h-7"
              id="close-menu-btn"
              src="icon/closeBtn.svg"
              alt=""
            />
          </div>
        </div>
        <div className="mt-5 border-b border-gray-300"></div>
        <div className="flex flex-col items-start justify-center gap-2 md:gap-4 ml-5 mt-5 mr-5 text-[#d1d5db]">
          <a href="./index.html" className="menu-mobile-active">
            <img className="w-7 h-7" src="assets/svg/home.svg" alt="" />
            <p className="text-xl font-semibold md:text-3xl">Home</p>
          </a>

          <a href="html/project.html" className="menu-mobile-not-active">
            <img className="w-7 h-7" src="assets/svg/project.svg" alt="" />
            <p className="text-xl font-semibold md:text-3xl">Project</p>
          </a>

          <a href="html/certi.html" className="menu-mobile-not-active">
            <img className="w-7 h-7" src="assets/svg/certi.svg" alt="" />
            <p className="text-xl font-semibold md:text-3xl">Certificate</p>
          </a>

          <a href="html/education.html" className="menu-mobile-not-active">
            <img className="w-7 h-7" src="assets/svg/edu.svg" alt="" />
            <p className="text-xl font-semibold md:text-3xl">Education</p>
          </a>

          <a href="html/about.html" className="menu-mobile-not-active">
            <img className="w-7 h-7" src="assets/svg/about.svg" alt="" />
            <p className="text-xl font-semibold md:text-3xl">About</p>
          </a>

          <a href="html/git.html" className="menu-mobile-not-active">
            <img className="w-7 h-7" src="assets/svg/git.svg" alt="" />
            <p className="text-xl font-semibold md:text-3xl">Get In Touch</p>
          </a>

          <a href="html/learn.html" className="menu-mobile-not-active">
            <img className="w-7 h-7" src="assets/svg/learn.svg" alt="" />
            <p className="text-xl font-semibold md:text-3xl">Learn</p>
          </a>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-[90%] mt-5 border-b border-gray-500"></div>
          <div className="flex flex-row items-center justify-around gap-8 mt-5 md:gap-14">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ArtaHendraa"
            >
              <div className="relative inline-block">
                <div className="relative">
                  <div className="social-media-hover">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/arta-hendrawan-0bb005286/"
            >
              <div className="relative inline-block">
                <div className="relative">
                  <div className="social-media-hover">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/artahendraa/"
            >
              <div className="relative inline-block">
                <div className="relative">
                  <div className="social-media-hover">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://discord.com/users/866497538823028787"
            >
              <div className="relative inline-block">
                <div className="relative">
                  <div className="social-media-hover">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.threads.net/@artahendraa"
            >
              <div className="relative inline-block">
                <div className="relative">
                  <div className="social-media-hover">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c1.466 0 2.961-.371 4.442-1.104l-.885-1.793C14.353 19.698 13.156 20 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8v1c0 .692-.313 2-1.5 2-1.396 0-1.494-1.819-1.5-2V8h-2v.025A4.954 4.954 0 0 0 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5c1.45 0 2.748-.631 3.662-1.621.524.89 1.408 1.621 2.838 1.621 2.273 0 3.5-2.061 3.5-4v-1c0-5.514-4.486-10-10-10zm0 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.tiktok.com/@_artahendraa"
            >
              <div className="relative inline-block">
                <div className="relative">
                  <div className="social-media-hover">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-[90%] mt-4 border-b border-gray-500"></div>
        </div>
        <div className="flex items-center justify-center mt-2 text-neutral-500">
          <span className="text-xs">
            <span className="text-neutral-400">&copy;</span> 2023 with
            <span className="text-red-600 animate-pulse">❤</span> by Arta
            Hendrawan
          </span>
        </div>
      </div>
      {/*  Mobile Menu End  */}
    </>
  );
};

export default MobileMenu;