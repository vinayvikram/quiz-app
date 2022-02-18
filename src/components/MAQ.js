import React from "react";

const MAQ = ({ ques, saveAnswer, selectedAnswer = [] }) => {
  const handleAnswers = (event) => {
    let options = document.getElementsByClassName("option");
    let answers = [];
    for (let option of options) {
      if (option.checked) {
        answers.push(option.value);
      }
    }
    saveAnswer(ques.question, answers);
  };
  return (
    <div className="questionBox">
      <h2>Tick the correct options.</h2>
      <span className="question">{ques.question}.</span>

      {ques.answer_choices.map((option, index) => (
        <div className="option" key={option}>
          <input
            type="checkbox"
            className="option"
            name={option}
            value={option}
            onChange={handleAnswers}
            defaultChecked={selectedAnswer.includes(option) ? true : false}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default MAQ;
