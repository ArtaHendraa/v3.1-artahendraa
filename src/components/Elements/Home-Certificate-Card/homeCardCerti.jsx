/* eslint-disable react/prop-types */
const HomeCardCerti = (props) => {
  const { image, name, title, date, alt, target } = props;
  return (
    <div className="card-certi-bg">
      <div className="overflow-hidden">
        <img
          alt={alt}
          loading="lazy"
          width="60"
          height="60"
          decoding="async"
          className="duration-700 ease-in-out scale-100 blur-0 grayscale-0"
          src={image}
        />
      </div>
      <div>
        <h2>{name}</h2>
        <div className="space-y-1 text-sm text-neutral-400">
          <div className="flex items-center gap-1 md:gap-2">
            <a href={target} target="_blank" rel="noreferrer">
              <span className="card-certi-links">
                {title}
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
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCardCerti;
