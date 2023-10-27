/* eslint-disable react/prop-types */
const MainLayout = (props) => {
  const { children } = props;
  return (
    <>
      <div className="flex flex-col justify-center lg:flex-row lg:gap-5 lg:pt-10">
        <div className="flex flex-col justify-center w-full lg:flex-row lg:gap-5">
          {children}
        </div>
      </div>
    </>
  );
};
export default MainLayout;
