const BottomNavigation = ({ handleChange }) => {
  const previousQuestion = () => {
    handleChange({ type: "decrement" });
  };
  const nextQuestion = () => {
    handleChange({ type: "increment" });
  };

  return (
    <div className="bottomNavigation">
      <div className="button" onClick={previousQuestion}>
        <div className="buttonSymbol">&lt;</div>
        <div className="buttonText">Previous</div>
      </div>
      <div className="button" onClick={nextQuestion}>
        <div className="buttonText">Next</div>
        <div className="buttonSymbol">&gt;</div>
      </div>
    </div>
  );
};

export default BottomNavigation;