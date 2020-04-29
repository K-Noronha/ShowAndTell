import React from "react";
import anthony from "../../../assets/anthony.png";
const Profile = (props) => {
  const { toggleModal } = props;
  return (
    <div className="profile">
      <h1 className="profile__Title">Anthony Jackson</h1>
      <div className="profile__Section">
        <img src={anthony} width="96px" height="96px" />
        <div className="profile__Description">
          <p>
            Hi I’m Anthony most people call me Andy. I Enjoy cooking, listening
            to music, and playing with my dog. Looking forward to connecting to
            other creatives.
          </p>
          <p>
            <strong>Location:</strong> Vancouver, B.C.
          </p>
        </div>
      </div>
      <div>
        <h3 className="profile__Title">Recent Projects</h3>
        <p className="profile_Description">Vegan Mac and Cheese</p>
        <p className="profile_Description">Landscape Mountains</p>
        <p className="profile_Description">Lyrical Poem</p>
      </div>
      <div className="profile__BtnContainer">
        <button className="profile__Btn" onClick={() => toggleModal(false)}>
          Add Friend
        </button>
      </div>
    </div>
  );
};

export default Profile;
