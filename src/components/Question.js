import React from "react";
import { selectQuestionComponent } from "../lib/selectQuestionComponent";

const Question = ({ questionDetail, saveAnswer }) => {
  return (
    <div className="container">
      {selectQuestionComponent(questionDetail, saveAnswer)}
    </div>
  );
};

export default Question;
