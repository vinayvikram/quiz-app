const getScore = (questions, selectedAnswers) => {
  let totalScore = 0;

  for (let ques of questions) {
    let type = ques.type;
    let question = ques.question;

    if (type === "FITB1" && question in selectedAnswers) {
      totalScore += ques.answers[0] === selectedAnswers[question][0] ? 1 : null;
    } else if (type === "FITB2" && question in selectedAnswers) {
      totalScore +=
        ques.answers[0] === selectedAnswers[question][0] &&
        ques.answers[1] === selectedAnswers[question][1]
          ? 1
          : 0;
    } else if (type === "MCQ" && question in selectedAnswers) {
      totalScore += ques.answer === selectedAnswers[question] ? 1 : 0;
    } else if (type === "MAQ" && question in selectedAnswers) {
      let isCorrect = false;
      if (ques.answers.length === selectedAnswers[question].length) {
        isCorrect = true;
        for (let ans of selectedAnswers[question]) {
          if (!ques.answers.includes(ans)) {
            isCorrect = false;
            break;
          }
        }
      }
      totalScore += isCorrect ? 1 : 0;
    } else if (type === "MTF" && question in selectedAnswers) {
      let titles = Object.keys(ques.answer_options[0]);
      let isCorrect = true;
      for (let answer of ques.answer_options) {
        if (
          !selectedAnswers[question][answer[titles[0]]] === answer[titles[1]]
        ) {
          isCorrect = false;
        }
      }
      totalScore += isCorrect ? 1 : 0;
    }
  }

  return totalScore;
};

export { getScore };
