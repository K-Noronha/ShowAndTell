import React from "react";

const Upload = (props) => {
  const { toggleModal } = props;
  return (
    <div className="upload">
      <h1 className="upload__Title">Upload your creation</h1>
      <h2 className="upload__Desc">
        Select the type of projet you want to upload
      </h2>
      <div className="upload__Option">
        <button
          onClick={() => toggleModal("uploadCreation")}
          className="upload__Option--btn"
        >
          Audio
        </button>
        <button
          onClick={() => toggleModal("uploadCreation")}
          className="upload__Option--btn"
        >
          Photo
        </button>
        <button
          onClick={() => toggleModal("uploadCreation")}
          className="upload__Option--btn"
        >
          Writing
        </button>
      </div>
    </div>
  );
};

export default Upload;
