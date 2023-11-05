/* eslint-disable react/prop-types */
import certificateData from "../../../assets/json/certificateData.json";

const CardCerti = (props) => {
  const { selectCerti } = props;

  const filterCerti = certificateData.filter((certi) =>
    selectCerti.includes(certi.id)
  );
  return (
    <>
      {filterCerti.map((certi) => (
        <div className="card-certi-bg" key={certi.id}>
          <div className="overflow-hidden">
            <img
              alt={certi.alt}
              loading="lazy"
              width="60"
              height="60"
              decoding="async"
              className="duration-700 ease-in-out scale-100 blur-0 grayscale-0"
              src={certi.image}
            />
          </div>
          <div>
            <h2>{certi.name}</h2>
            <div className="space-y-1 text-sm text-neutral-400">
              <div className="flex items-center gap-1 md:gap-2">
                <a href={certi.target} target="_blank" rel="noreferrer">
                  <span className="card-certi-links">
                    {certi.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </span>
                </a>
              </div>
              <div className="flex flex-col md:text-[13px]">
                <div className="flex gap-1">
                  <span>{certi.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardCerti;

{
  /*  */
}
