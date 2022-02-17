import React from "react";

const FITB2 = ({ ques }) => {
  return (
    <div className="questionBox">
      <h2>Fill in the given blank.</h2>
      <span className="question">{ques.question}</span>
      <input
        type="text"
        className="answerBlank"
        placeholder="Type your first answer here"
      />
      <input
        type="text"
        className="answerBlank"
        placeholder="Type your second answer here"
      />
    </div>
  );
};

export default FITB2;
