import React from "react";

const FITB1 = ({ ques, saveAnswer }) => {
  return (
    <div className="questionBox">
      <h2>Fill in the given blank.</h2>
      <span className="question">{ques.question}</span>
      <input
        type="text"
        className="answerBlank"
        placeholder="Type your answer here"
        onChange={(event) => saveAnswer(ques.question, event.target.value)}
      />
    </div>
  );
};

export default FITB1;
