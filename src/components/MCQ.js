import React from "react";

const MCQ = ({ ques, saveAnswer }) => {
  const handleAnswer = (event) => {
    let answer = event.target.value;
    saveAnswer(ques.question, answer);
  };
  return (
    <div>
      <h2>Choose the correct option.</h2>
      <span className="question">{ques.question}</span>

      {ques.answer_choices.map((option, index) => (
        <div className="option">
          <input
            type="radio"
            name="answer"
            value={option}
            onChange={handleAnswer}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default MCQ;
