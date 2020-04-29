import React from "react";

const Upload = (props) => {
  const { toggleModal } = props;
  return (
    <div className="upload">
      <h1 className="upload__Title">Upload your creation</h1>
      <h2 className="challenge__Description">Select the type of projet you want to upload</h2>
      <div className="upload__Option">
        <button className="upload__Option--btn">Audio</button>
        <button className="upload__Option--btn">Photo</button>
        <button className="upload__Option--btn">Writing</button>
      </div>
      <button onClick={() => toggleModal("uploadCreation")}>CLOSE</button>
    </div>
  );
};

export default Upload;
