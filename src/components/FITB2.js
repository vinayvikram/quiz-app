import React from "react";

const FITB2 = ({ ques, saveAnswer, selectedAnswer = [] }) => {
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
        value={selectedAnswer.length > 0 ? selectedAnswer[0] : ""}
        onChange={handleAnswers}
      />
      <input
        type="text"
        className="answerBlank"
        id="blank2"
        placeholder="Type your second answer here"
        value={selectedAnswer.length > 0 ? selectedAnswer[1] : ""}
        onChange={handleAnswers}
      />
    </div>
  );
};

export default FITB2;
