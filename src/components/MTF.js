import React, { useEffect, useState } from "react";

const MTF = ({ ques, saveAnswer }) => {
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
      let option = dropdown.children[0].value;
      answers[name] = option;
    }

    saveAnswer(ques.question, answers);
  };

  return (
    <div>
      <h2>Choose the correct option.</h2>
      <span className="question">{ques.question}</span>
      <div className="matchBox">
        <div className="matchColumn" onChange={handleAnswers}>
          {names.map((item, index) => (
            <div className="matchText" name={item}>
              {index + 1}.{item}
              <select className="matchDropdown">
                {options.map((item, index) => (
                  <option value={item}>
                    {String.fromCharCode(65 + index)}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <div className="matchColumn">
          {options.map((item, index) => (
            <div className="matchText">
              {String.fromCharCode(65 + index)}.{item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MTF;
