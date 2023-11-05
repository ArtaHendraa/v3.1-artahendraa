/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SkillList from "../Skill-List/skillList";

const Card = (props) => {
  const { target, image, title, description, skillIcon, banner } = props;
  return (
    <div className="opacity-100 transform-none">
      <Link to={target} target="_blank">
        <div className="project-card-bg">
          <div className={`banner ${banner}`}>New</div>
          <div className="overflow-hidden">
            <img
              loading="lazy"
              width="400"
              height="200"
              className="bg-transparent project-image-style"
              src={image}
            />
          </div>
          <div className="p-5 space-y-2">
            <div className="project-card-title-hover">{title}</div>
            <p className="project-description">{description}</p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <SkillList size="w-6" selectedIconIds={skillIcon} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
