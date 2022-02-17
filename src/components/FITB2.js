import React from "react";

const FITB2 = ({ ques, saveAnswer }) => {
  const handleAnswers = (event) => {
    let value1 = document.getElementById("blank1").value;
    let value2 = document.getElementById("blank2").value;
    saveAnswer(ques.question, [value1, value2]);
  };
  return (
    <div className="questionBox">
      <h2>Fill in the given blank.</h2>
      <span className="question">{ques.question}</span>
      <input
        type="text"
        className="answerBlank"
        id="blank1"
        placeholder="Type your first answer here"
        onChange={handleAnswers}
      />
      <input
        type="text"
        className="answerBlank"
        id="blank2"
        placeholder="Type your second answer here"
        onChange={handleAnswers}
      />
    </div>
  );
};

export default FITB2;
