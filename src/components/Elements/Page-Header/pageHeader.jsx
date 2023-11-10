/* eslint-disable react/prop-types */
const PageHeader = (props) => {
  const { title, description, customClass } = props;
  return (
    <>
      <section className="space-y-2 bg-no-repeat bg-cover">
        <div className="flex items-center gap-2">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#FFFF"
            className="w-7 h-7"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={path} />
          </svg> */}

          <h1 className="text-2xl font-semibold">{title}</h1>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-neutral-400">{description}</p>
        </div>
      </section>
      <div
        className={`my-4 mt-2 ${customClass} border-t border-dashed border-neutral-400`}
      ></div>
    </>
  );
};

export default PageHeader;
