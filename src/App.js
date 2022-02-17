import React, { useState } from "react";
import Question from "./components/Question";
import Timer from "./components/Timer";
import BottomNavigation from "./components/BottomNavigation";
import FileUploader from "./components/FileUploader";
import "./App.css";
import { extractAnswers } from "./lib/extractAnswers";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setQuestionIndex] = useState(0);
  const correctAnswers = extractAnswers(questions);
  const selectedAnswers = {};
  const totalTime = questions.reduce((sum, item) => sum + item.time, 0) || 0;

  const saveAnswer = (question, answer) => {
    console.log("answered");
    selectedAnswers[question] = answer;
    console.log(selectedAnswers);
  };

  const changeQuestionIndex = (change) => {
    if (
      change.type === "increment" &&
      currentQuestionIndex < questions.length - 1
    ) {
      setQuestionIndex((index) => index + 1);
    }
    if (change.type === "decrement" && currentQuestionIndex > 0) {
      setQuestionIndex((index) => index - 1);
    }

    return;
  };

  return (
    <div className="app">
      <FileUploader setQuestions={setQuestions} />
      <Timer totalTime={totalTime} />
      <Question
        questionDetail={questions[currentQuestionIndex]}
        saveAnswer={saveAnswer}
      />
      <BottomNavigation handleChange={changeQuestionIndex} />
    </div>
  );
};

export default App;
