const extractAnswers = (questions) => {
  let correctAnswers = {};

  for (let ques of questions) {
    let type = ques.type;
    let answer = {};

    if (type === "FITB1") {
      answer = { type: type, answer: ques.answers };
    } else if (type === "FITB2") {
      answer = { type: type, answer: ques.answers };
    } else if (type === "MCQ") {
      answer = { type: type, answer: ques.answer };
    } else if (type === "MAQ") {
      answer = { type: type, answer: ques.answers };
    } else if (type === "MTF") {
      answer = { type: type, answer: ques.answer_options };
    }

    correctAnswers[ques.question] = answer;
  }

  return correctAnswers;
};

export { extractAnswers };
