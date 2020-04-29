import React from "react";

const Challenge = (props) => {
  const { toggleModal } = props;
  return (
    <div>
      <h1>Challenge</h1>
      <button onClick={() => toggleModal(false)}>CLOSE</button>
    </div>
  );
};

export default Challenge;
