import React from "react";

const NumberBox = ({ number = 0, changeIndex, color }) => {
  return (
    <div
      className="numberBox"
      onClick={() => changeIndex(number - 1)}
      style={{ backgroundColor: color }}
    >
      <span>{number}</span>
    </div>
  );
};

export default NumberBox;
