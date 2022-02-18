import React from "react";

const FITB1 = ({ ques, saveAnswer, selectedAnswer = [""] }) => {
  return (
    <div className="questionBox">
      <h2>Fill in the given blank.</h2>
      <span className="question">
        {ques.question.replace(/\{\}/g, "__________")}.
      </span>
      <input
        type="text"
        className="answerBlank"
        placeholder="Type your answer here"
        value={selectedAnswer[0]}
        onChange={(event) => saveAnswer(ques.question, [event.target.value])}
      />
    </div>
  );
};

export default FITB1;
