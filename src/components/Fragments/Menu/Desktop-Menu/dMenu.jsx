import LinkPage from "../../../Elements/Link-Menu/linkMenu";
import BorderMenu from "../../../Elements/Border-menu/border";
import Copyright from "../../../Elements/Copyright/copyright";

const DesktopMenu = () => {
  return (
    <header>
      <div className="sticky top-0 z-10 flex flex-col transition-all duration-300 lg:py-8">
        <div className="z-20 shadow-sm xl:shadow-none lg:border-none border-b border-gray-500 lg:!bg-transparent w-full p-5 lg:relative lg:p-0">
          <div className="flex items-start justify-between lg:flex-col lg:space-y-4">
            <Identity />
          </div>

          <BorderMenu display="hidden xl:block" />

          <div className="flex-col hidden p-0 space-y-1 lg:flex">
            <LinkPage />
          </div>

          <BorderMenu display="hidden xl:block" />

          <div className="items-center justify-center hidden gap-1 py-1 text-xs w-[230px] xl:flex">
            <Copyright />
          </div>
        </div>
      </div>
    </header>
  );
};

const Identity = () => {
  return (
    <div className="flex items-center lg:items-start gap-4 lg:gap-0.5 flex-grow lg:flex-col w-full">
      <div className="w-10 h-10 overflow-hidden rounded-full xl:w-[85px] xl:h-[85px]">
        <img
          alt="profile"
          loading="lazy"
          width="85"
          height="85"
          className="duration-700 ease-in-out scale-100 rounded-full blur-0 grayscale-0 lg:hover:scale-125"
          src="profile-image/profile-image-1.webp"
          style={{ color: "transparent" }}
        />
      </div>
      <div className="flex items-center gap-1 mt-1 lg:mt-4">
        <div>
          <h1 className="flex-grow text-lg font-semibold">Arta Hendrawan</h1>
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
  );
};

export default DesktopMenu;
