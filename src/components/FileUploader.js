import React, { useState } from "react";

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
      .catch((error) => setIsError(true));
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
      </div>
    </div>
  );
};

export default FileUploader;
