import React from "react";

const Upload = (props) => {
  const { toggleModal } = props;
  return (
    <div>
      <h1>UPLOAD PAGE</h1>
      <button onClick={() => toggleModal("uploadCreation")}>CLOSE</button>
    </div>
  );
};

export default Upload;
