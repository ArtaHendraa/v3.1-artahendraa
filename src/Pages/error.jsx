import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-3">
      <h1 className="text-7xl">
        {">"}_{"<"}
      </h1>
      <h1 className="text-xl">Page Not Found</h1>
      <Link className="mt-5 menu-active" to="/">
        Go Home
      </Link>
    </div>
  );
};
export default ErrorPage;
