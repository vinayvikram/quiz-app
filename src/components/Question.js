import React from "react";
import { selectQuestionComponent } from "../lib/selectQuestionComponent";

const Question = ({
  questionNumber,
  questionDetail,
  saveAnswer,
  selectedAnswers,
  totalQuestions
}) => {
  return (
    <div className="container">
      <div className="row">
        <h2>
          {Number.isInteger(questionNumber) ? questionNumber + "." : " "} &nbsp;
        </h2>
        {selectQuestionComponent(questionDetail, saveAnswer, selectedAnswers)}
      </div>
      <h3 className="pagination">
        {Number.isInteger(questionNumber) &&
          questionNumber + "/" + totalQuestions}
      </h3>
    </div>
  );
};

export default Question;
