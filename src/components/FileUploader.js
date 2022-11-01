import React, { useState } from "react";

const sampleData= [
  {
    "question": "India is {} largest country by population",
    "type": "FITB1",
    "time": 20,
    "answers": ["second"]
  },
  {
    "question": "India is {} largest country by population and ranks {} in terms of landmass",
    "type": "FITB2",
    "time": 20,
    "answers": ["second", "seventh"]
  },
  {
    "question": "Select top two countries which has highest GDP",
    "type": "MAQ",
    "time": 20,
    "answer_choices": ["USA", "China", "Japan", "Germany", "UK", "India"],
    "answers": ["USA", "China"]
  },
  {
    "question": "Which among the following is the most valuable company in the world",
    "type": "MCQ",
    "time": 20,
    "answer_choices": ["Tesla", "Apple", "Microsoft", "Netflix", "Google"],
    "answer": "Tesla"
  },
  {
    "question": "Match the following captials with states",
    "type": "MTF",
    "time": 20,
    "answer_options": [
      { "State": "Maharashtra", "Capital": "Mumbai" },
      { "State": "Punjab", "Capital": "Chandigarh" },
      { "State": "Karnataka", "Capital": "Bengaluru" },
      { "State": "Himachal Pradesh", "Capital": "Shimla" },
      { "State": "Rajasthan", "Capital": "Jaipur" }
    ]
  }
]

const FileUploader = ({ setQuestions, setTotalTime, setIndex }) => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    setIsError(false);
    setIsSelected(true);
    setIsUploaded(false);
    fetch(
      "https://www.filestackapi.com/api/store/S3?key=Aomson5K0Smm19ZMYKha2z",
      {
        method: "POST",
        body: file
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setUrl(result.url);
        setIsUploaded(true);
      })
      .catch((error) => setIsError(true));
  };
  
  const fetchSampleData = () => {
    const res = sampleData;
    setQuestions(res);
    setIndex(0);
    const totalTime = res.reduce((sum, item) => sum + item.time, 0);
    setTotalTime(totalTime);

    setTimeout(() => {
      document.getElementById("submit").click();
    }, totalTime * 1000);
    document.getElementById("overlay").style.display = "none";
  };

  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setQuestions(res);
        setIndex(0);
        const totalTime = res.reduce((sum, item) => sum + item.time, 0);
        setTotalTime(totalTime);

        setTimeout(() => {
          document.getElementById("submit").click();
        }, totalTime * 1000);
        document.getElementById("overlay").style.display = "none";
      })
      .catch((error) => {
             setIsError(true);
    });
  };

  return (
    <div id="overlay">
      <div className="uploader">
        <h3>Please upload a JSON file containing questions to continue.</h3>
        <div className="chooser">
          <input type="file" onChange={handleUpload} />
          {isSelected && !isUploaded && <p>Loading questions...</p>}
          {isSelected && isError && <p>Please upload correct file.</p>}
        </div>
        <button
          onClick={fetchData}
          className={isUploaded && !isError ? "" : "disabled"}
          disabled={isUploaded && !isError ? false : true}
        >
          Start Quiz
        </button>
           <button
          onClick={fetchSampleData}
           >
          Start Demo
        </button>
      </div>
    </div>
  );
};

export default FileUploader;
