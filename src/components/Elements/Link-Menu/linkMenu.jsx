/* eslint-disable react/jsx-key */
import linkData from "../../../assets/json/linkData.json";
import { Link } from "react-router-dom";

const LinkPage = () => {
  return (
    <>
      {linkData.map((link) => (
        <Link to={link.target} key={link.id}>
          <div
            className={
              location.pathname === link.target
                ? "menu-active"
                : "menu-not-active"
            }
          >
            <div>
              <img src={link.icon} alt={link.id} />
            </div>
            <div className="flex-grow ml-0.5">{link.title}</div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default LinkPage;
