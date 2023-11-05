/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import skillsData from "../../../assets/json/skillsData.json";

const SkillList = (props) => {
  const { size, selectedIconIds } = props;

  // Filter the skill icons based on the selectedIconIds
  const filteredIcons = skillsData.filter((skillIcon) =>
    selectedIconIds.includes(skillIcon.id)
  );

  return (
    <>
      {filteredIcons.map((skillIcon) => (
        <div className={size} key={skillIcon.id}>
          <div className="relative inline-block">
            <div className="relative">
              <div dangerouslySetInnerHTML={{ __html: skillIcon.svg }}></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SkillList;
