import React, { useState, useEffect } from "react";

const Timer = ({ totalTime }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [color, setColor] = useState("black");

  useEffect(() => {
    setTimeLeft(totalTime);
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => (timeLeft > 0 ? timeLeft - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [totalTime]);

  useEffect(() => {
    timeLeft < 10 && timeLeft > 0 && setColor("red");
  }, [timeLeft]);

  return (
    <div className="timer">
      <div className="timerText">Time Left : &nbsp; </div>
      <div className="time" style={{ color: color }}>
        {timeLeft > 1 ? timeLeft + " seconds" : timeLeft + " second"}
      </div>
    </div>
  );
};

export default Timer;
