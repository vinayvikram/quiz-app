import React, { useEffect, useState } from "react";

const MTF = ({ ques, saveAnswer, selectedAnswer = {} }) => {
  const [names, setNames] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const titles = Object.keys(ques.answer_options[0]);
    let names = [];
    let options = [];
    for (let item of ques.answer_options) {
      names.push(item[titles[0]]);
      options.push(item[titles[1]]);
    }
    options.sort(() => Math.random() - 0.5);
    setNames(names);
    setOptions(options);
  }, [ques]);

  const handleAnswers = () => {
    let dropdowns = document.querySelector(".matchColumn").children;
    let answers = {};
    for (let dropdown of dropdowns) {
      let name = dropdown.getAttribute("name");
      let option = dropdown.children[1].value;
      answers[name] = option;
    }

    saveAnswer(ques.question, answers);
  };

  return (
    <div className="questionBox">
      <h2>Choose the correct option.</h2>
      <span className="question">{ques.question}.</span>
      <div className="matchBox">
        <div className="matchColumn" onChange={handleAnswers}>
          {names.map((name, index) => (
            <div className="matchText" name={name} key={name}>
              <span>
                {index + 1}.{name}
              </span>
              <select
                className="matchDropdown"
                defaultValue={
                  name in selectedAnswer ? selectedAnswer[name] : options[0]
                }
              >
                {options.map((option, index) => (
                  <option value={option} key={option}>
                    {String.fromCharCode(65 + index)}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <div className="matchColumn">
          {options.map((option, index) => (
            <div className="matchText" key={option}>
              {String.fromCharCode(65 + index)}.{option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MTF;
