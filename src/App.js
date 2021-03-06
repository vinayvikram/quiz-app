import React, { useState } from "react";
import Question from "./components/Question";
import Timer from "./components/Timer";
import BottomNavigation from "./components/BottomNavigation";
import SideNavigation from "./components/SideNavigation";
import FileUploader from "./components/FileUploader";
import "./App.css";
import changeQuestionIndex from "./lib/changeQuestionIndex";
import { getScore } from "./lib/getScore";
import ScoreCard from "./components/ScoreCard";
import Footer from "./components/Footer";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setQuestionIndex] = useState(NaN);
  const [selectedAnswers, addAnswers] = useState({});
  const [totalTime, setTotalTime] = useState(0);
  const [score, setScore] = useState(0);

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
    setScore(getScore(questions, selectedAnswers));
    document.getElementById("scoreCard").style.display = "flex";
  };

  return (
    <div className="app">
      <FileUploader
        setQuestions={setQuestions}
        setTotalTime={setTotalTime}
        setIndex={setQuestionIndex}
      />
      <div id="sideColumn">
        <h1>Quiz</h1>
        <SideNavigation
          questions={questions}
          handleChange={handleIndexChange}
          currentIndex={currentQuestionIndex}
          selectedAnswers={selectedAnswers}
        />
        <Footer />
      </div>
      <div id="mainColumn">
        <Timer totalTime={totalTime} />
        <Question
          questionNumber={currentQuestionIndex + 1}
          questionDetail={questions[currentQuestionIndex]}
          selectedAnswers={selectedAnswers}
          saveAnswer={saveAnswer}
          totalQuestions={questions.length}
        />
        <BottomNavigation handleChange={handleIndexChange} submit={submit} />
      </div>
      <ScoreCard score={score} total={questions.length} />
    </div>
  );
};

export default App;
