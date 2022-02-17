import React from "react";
import { selectQuestionComponent } from "../lib/selectQuestionComponent";

const Question = ({ questionNumber, questionDetail, saveAnswer }) => {
  return (
    <div className="container">
      {questionNumber} . {selectQuestionComponent(questionDetail, saveAnswer)}
    </div>
  );
};

export default Question;
