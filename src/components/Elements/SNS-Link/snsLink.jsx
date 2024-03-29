/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import snsLinkData from "../../../assets/json/snsLinkData.json";
const SNSLink = () => {
  return (
    <>
      {snsLinkData.map((social) => (
        <a
          target="_blank"
          rel="noreferrer"
          href={social.target}
          key={social.id}
          className="gap-2 flex items-center justify-center bg-[#393E46] py-3 text-sm md:text-base w-full rounded-lg hover:scale-[102%] duration-300 xl:opacity-80 hover:xl:opacity-100"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox={social.viewBox}
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={social.path}></path>
          </svg>
          <span>{social.id}</span>
        </a>
      ))}
    </>
  );
};
export default SNSLink;
