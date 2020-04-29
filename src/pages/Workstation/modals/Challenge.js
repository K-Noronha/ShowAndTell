import React from "react";
import {anthony} from '../../../assets/anthony.png';
import {jessicaB} from '../../../assets/jessicaB.png';
import {jessicaS} from '../../../assets/jessicaS.png';



const Challenge = (props) => {
  const { toggleModal } = props;
  return (
    <div className="challenge">
      <h1 className="challenge__Friend">Challenge a friend</h1>
      <h2 className="challenge__Invite">Invite your friends to complete the project</h2>
      <div className="challenge__Choice">
        <img src={anthony}></img>
        <p>Anthony Jackson</p>
        <button className="challenge__Choice--button">Challenge</button>
      </div>
      <div className="challenge__Choice">
        <img src={jessicaB}></img>
        <p>Jessica Beetle</p>
        <button className="challenge__Choice--button">Challenge</button>
      </div>
      <div className="challenge__Choice">
        <img src={jessicaS}></img>
        <p>Jessica Stern</p>
        <button className="challenge__Choice--button">Challenge</button>
      </div>
      <button className="challenge__Closebtn " onClick={() => toggleModal(false)}>CLOSE</button>
    </div>
  );
};

export default Challenge;
