import React from "react";

const ScoreCard = ({ score, total }) => {
  return (
    <div id="scoreCard">
      <div className="scoreBox">
        <h1>
          Your scored <span id="score">{score}</span> out of {total}.
        </h1>
        {score / total >= 0 && score / total <= 0.5 && (
          <h2> You need to work hard.</h2>
        )}
        {score / total > 0.5 && score / total <= 0.8 && (
          <h2> You should aim for higher.</h2>
        )}
        {score / total > 0.8 && score / total <= 0.9 && (
          <h2> You are almost near the perfection.</h2>
        )}
        {score / total > 0.9 && <h2> Congratulations! You did excellent. </h2>}
      </div>
    </div>
  );
};

export default ScoreCard;
