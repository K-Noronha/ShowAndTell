import React from "react";
import file from "../../../assets/fileUpload.png";

const UploadCreation = (props) => {
  const { toggleModal } = props;
  return (
    <div className="uploadC">
      <h1 className="uploadC__Title">Upload your creation</h1>
      <div className="uploadC__Section">
        <img className="uploadC__File--image" src={file} />
        <p>Description </p>
        <input className="uploadC__File--description" type="Text" />
      </div>
      <button className="uploadC__Bttn" onClick={() => toggleModal(false)}>
        Upload
      </button>
    </div>
  );
};

export default UploadCreation;
