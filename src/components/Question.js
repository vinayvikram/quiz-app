import React from "react";
import { selectQuestionComponent } from "../lib/selectQuestionComponent";

const Question = ({
  questionNumber,
  questionDetail,
  saveAnswer,
  selectedAnswers
}) => {
  return (
    <div className="container">
      {questionNumber} .{" "}
      {selectQuestionComponent(questionDetail, saveAnswer, selectedAnswers)}
    </div>
  );
};

export default Question;
