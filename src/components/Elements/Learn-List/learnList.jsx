/* eslint-disable react/prop-types */
import skillsData from "../../../assets/json/skillsData.json";

const LearnList = (props) => {
  const { size, selectedIconIds } = props;

  const filteredIcons = skillsData.filter((Icon) =>
    selectedIconIds.includes(Icon.id)
  );
  return (
    <>
      {filteredIcons.map((Icon) => (
        <a href="" className="learn-card-bg" key={Icon.id}>
          <div className="flex items-center gap-2">
            <div
              className={`${size}`}
              dangerouslySetInnerHTML={{ __html: Icon.svg }}
            ></div>
            <h1 className="text-xs md:text-base">{Icon.id}</h1>
          </div>
        </a>
      ))}
    </>
  );
};

export default LearnList;
