/* eslint-disable react/prop-types */
const CertiLayout = (props) => {
  const { children } = props;
  return <div className="grid gap-4 md:grid-cols-2">{children}</div>;
};
export default CertiLayout;
