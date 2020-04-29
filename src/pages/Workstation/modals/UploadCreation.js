import React from "react";

const UploadCreation = (props) => {
  const { toggleModal } = props;
  return (
    <div>
      <h1>UPLOAD creation PAGE</h1>
      <button onClick={() => toggleModal(false)}>CLOSE</button>
    </div>
  );
};

export default UploadCreation;
