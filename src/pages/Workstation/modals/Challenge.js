import React from "react";
import anthony from "../../../assets/anthony.png";
import jessicaB from "../../../assets/jessicaB.png";
import jessicaS from "../../../assets/jessicaS.png";

const Challenge = (props) => {
  const { toggleModal } = props;
  return (
    <div className="challenge">
      <h1 className="challenge__Friend">Challenge a friend</h1>
      <h2 className="challenge__Invite">
        Invite your friends to complete the project
      </h2>
      <div className="challenge__Choice" onClick={() => toggleModal(false)}>
        <img className="challenge__Choice--image" width="80px" src={anthony} />
        <p>Anthony Jackson</p>
        <button className="challenge__Choice--button">Challenge</button>
      </div>
      <div
        onClick={() => toggleModal(false)}
        className="challenge__Choice--image"
        className="challenge__Choice"
      >
        <img src={jessicaB} width="80px" />
        <p>Jessica Beetle</p>
        <button
          onClick={() => toggleModal(false)}
          className="challenge__Choice--button"
        >
          Challenge
        </button>
      </div>
      <div className="challenge__Choice">
        <img className="challenge__Choice--image" src={jessicaS} width="80px" />
        <p>Jessica Stern</p>
        <button
          onClick={() => toggleModal(false)}
          className="challenge__Choice--button"
        >
          Challenge
        </button>
      </div>
      <button
        className="challenge__Closebtn "
        onClick={() => toggleModal(false)}
      >
        Close
      </button>
    </div>
  );
};

export default Challenge;
