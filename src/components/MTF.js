import React from "react";

const MTF = ({ ques }) => {
  const titles = Object.keys(ques.answer_options[0]);

  return (
    <div>
      <h2>Choose the correct option.</h2>
      <span className="question">{ques.question}</span>
      <div className="matchBox">
        <div className="matchColumn">
          {ques.answer_options.map((item, index) => (
            <div className="matchText">
              {index + 1}.{item[titles[0]]}
              <select className="matchDropdown">
                {ques.answer_options.map((item, index) => (
                  <option>{String.fromCharCode(65 + index)}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <div className="matchColumn">
          {ques.answer_options.map((item, index) => (
            <div className="matchText">
              {String.fromCharCode(65 + index)}.{item[titles[1]]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MTF;
