import React, { useState } from "react";
import Question from "./components/Question";
import Timer from "./components/Timer";
import BottomNavigation from "./components/BottomNavigation";
import SideNavigation from "./components/SideNavigation";
import FileUploader from "./components/FileUploader";
import "./App.css";
import changeQuestionIndex from "./lib/changeQuestionIndex";
import { getScore } from "./lib/getScore";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setQuestionIndex] = useState(4);
  const [selectedAnswers, addAnswers] = useState({});
  const [totalTime, setTotalTime] = useState(0);

  const saveAnswer = (question, answer) => {
    addAnswers((currentAnswers) => ({ ...currentAnswers, [question]: answer }));
  };

  const handleIndexChange = (change) => {
    changeQuestionIndex(
      change,
      setQuestionIndex,
      currentQuestionIndex,
      questions.length - 1
    );
  };

  const submit = () => {
    console.log(getScore(questions, selectedAnswers));
  };

  return (
    <div className="app">
      <FileUploader setQuestions={setQuestions} setTotalTime={setTotalTime} />
      <div id="sideColumn">
        <h1>Quiz</h1>
        <SideNavigation
          questions={questions}
          handleChange={handleIndexChange}
          currentIndex={currentQuestionIndex}
        />
        <div className="footer"> Designed By Vinay Vikram </div>
      </div>
      <div id="mainColumn">
        <Timer totalTime={totalTime} />
        <Question
          questionNumber={currentQuestionIndex + 1}
          questionDetail={questions[currentQuestionIndex]}
          saveAnswer={saveAnswer}
        />
        <BottomNavigation handleChange={handleIndexChange} />
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
};

export default App;
