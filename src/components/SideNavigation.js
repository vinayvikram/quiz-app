import NumberBox from "./NumberBox";

const SideNavigation = ({
  questions,
  handleChange,
  currentIndex,
  selectedAnswers
}) => {
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
            key={index}
            color={ques.question in selectedAnswers ? "#7FB800" : "#F6511D"}
            disabled={currentIndex === index ? false : true}
          />
        ))}
      </div>
    </div>
  );
};

export default SideNavigation;
