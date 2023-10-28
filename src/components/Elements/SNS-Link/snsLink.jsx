/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import snsLinkData from "../../../assets/json/snsLinkData.json";
const SNSLink = () => {
  return (
    <>
      {snsLinkData.map((icon) => (
        <a target="_blank" rel="noreferrer" href={icon.target} key={icon.id}>
          <div className="relative inline-block">
            <div className="relative">
              <div className="social-media-hover">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox={icon.viewBox}
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={icon.path}></path>
                </svg>
              </div>
            </div>
          </div>
        </a>
      ))}
    </>
  );
};
export default SNSLink;
