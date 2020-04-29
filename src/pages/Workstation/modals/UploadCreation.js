import React from "react";
import {file} from '../../../assets/fileUpload.png';


const UploadCreation = (props) => {
  const { toggleModal } = props;
  return (
    <div className="upload">
      <h1 className="upload__Title">UPLOAD creation PAGE</h1>
      <div>
        <img className="upload__File--image" src={file}></img>
        <input className="upload__File--description" type="Text"></input>
      </div>
      <button classname="upload__Bttn" onClick={() => toggleModal(false)}>Upload</button>
    </div>
  );
};

export default UploadCreation;
