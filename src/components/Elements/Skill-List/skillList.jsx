/* eslint-disable react/jsx-key */
import skillsData from "../../../assets/json/skillsData.json";

const SkillList = () => {
  return (
    <>
      {skillsData.map((skillICon) => (
        <div className="w-8">
          <div className="relative inline-block">
            <div className="relative">
              <div dangerouslySetInnerHTML={{ __html: skillICon.svg }}></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SkillList;
