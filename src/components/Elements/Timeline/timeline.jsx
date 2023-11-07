/* eslint-disable react/prop-types */
const Timeline = (props) => {
  const { name, location, year, color } = props;
  return (
    <li className="mb-10 ml-7">
      <span className={`${color} image-edu-style`}>
        <svg
          className="w-2.5 h-2.5 text-[white]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </span>
      <h3 className="mb-1 edu-title">{name}</h3>
      <time className="block mb-1 text-sm font-normal leading-none text-gray-400">
        {year}
      </time>
      <p className="mb-1 text-base font-normal text-gray-400">{location}</p>
    </li>
  );
};

export default Timeline;
