const BottomNavigation = ({ handleChange, submit }) => {
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
        <div className="buttonText hideText">Previous</div>
      </div>
      <div className="button" onClick={submit} id="submit">
        <div className="buttonText">Submit</div>
      </div>
      <div className="button" onClick={nextQuestion}>
        <div className="buttonText hideText">Next</div>
        <div className="buttonSymbol">&gt;</div>
      </div>
    </div>
  );
};

export default BottomNavigation;
