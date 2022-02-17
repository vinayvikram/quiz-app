import React, { useState } from "react";

const FileUploader = ({ setQuestions }) => {
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
      });
  };

  return (
    <div className="uploader">
      <input type="file" onChange={handleUpload} />
      {isUploading ? "Uploading..." : "Uploaded"}
      <button onClick={fetchData}> Start Quiz </button>
    </div>
  );
};

export default FileUploader;
