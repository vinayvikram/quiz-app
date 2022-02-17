import React, { useState } from "react";

const FileUploader = ({ setQuestions, setTotalTime }) => {
  const [isUploading, setIsUploading] = useState(true);
  var [url, setUrl] = useState(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];

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
        setIsUploading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setQuestions(res);
        const totalTime = res.reduce((sum, item) => sum + item.time, 0);
        setTotalTime(totalTime);
        setTimeout(() => {
          document.getElementById("submit").click();
        }, totalTime * 1000);
        document.getElementById("overlay").style.display = "none";
      });
  };

  return (
    <div id="overlay">
      <div className="uploader">
        <h3>Please upload a JSON file containing questions to continue.</h3>
        <input type="file" onChange={handleUpload} />
        <button onClick={fetchData} disabled={isUploading ? true : false}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default FileUploader;
