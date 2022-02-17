import FITB1 from "../components/FITB1";
import FITB2 from "../components/FITB2";
import MCQ from "../components/MCQ";
import MAQ from "../components/MAQ";
import MTF from "../components/MTF";

const selectQuestionComponent = (question, saveAnswer) => {
  let type = question?.type || null;

  if (type === "FITB1") {
    return <FITB1 ques={question} saveAnswer={saveAnswer} />;
  } else if (type === "FITB2") {
    return <FITB2 ques={question} saveAnswer={saveAnswer} />;
  } else if (type === "MCQ") {
    return <MCQ ques={question} saveAnswer={saveAnswer} />;
  } else if (type === "MAQ") {
    return <MAQ ques={question} saveAnswer={saveAnswer} />;
  } else if (type === "MTF") {
    return <MTF ques={question} saveAnswer={saveAnswer} />;
  }

  return "No Questions Found";
};

export { selectQuestionComponent };
