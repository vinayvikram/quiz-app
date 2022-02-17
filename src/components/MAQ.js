import React from "react";

const MAQ = ({ ques }) => {
  return (
    <div>
      <h2>Tick the correct options.</h2>
      <span className="question">{ques.question}</span>

      {ques.answer_choices.map((option, index) => (
        <div className="option">
          <input type="checkbox" name={option} value={option} />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default MAQ;
