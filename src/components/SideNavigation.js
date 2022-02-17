import { useEffect } from "react";
import NumberBox from "./NumberBox";

const SideNavigation = ({ questions, handleChange, currentIndex }) => {
  const changeIndex = (index) => {
    handleChange({ type: "jump", index: index });
  };
  return (
    <div className="sideNavigation">
      <div className="scrollBox">
        {questions.map((ques, index) => (
          <NumberBox
            number={index + 1}
            changeIndex={changeIndex}
            color={currentIndex === index ? "green" : "orange"}
          />
        ))}
      </div>
    </div>
  );
};

export default SideNavigation;
