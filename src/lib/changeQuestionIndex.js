const changeQuestionIndex = (change, setIndex, currentIndex, lastIndex) => {
  if (change.type === "increment" && currentIndex < lastIndex) {
    setIndex((index) => index + 1);
  }
  if (change.type === "decrement" && currentIndex > 0) {
    setIndex((index) => index - 1);
  }

  if (change.type === "jump") {
    setIndex(change.index);
  }

  return;
};

export default changeQuestionIndex;
