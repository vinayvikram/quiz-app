import React, { useState, useEffect } from "react";

const Timer = ({ totalTime }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    setTimeLeft(totalTime);
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => (timeLeft > 0 ? timeLeft - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [totalTime]);

  return (
    <div className="timer">
      <div className="timerText">Time Left : &nbsp; </div>
      <div className="time">{timeLeft} seconds</div>
    </div>
  );
};

export default Timer;
