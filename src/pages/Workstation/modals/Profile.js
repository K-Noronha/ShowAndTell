import React from "react";

const Profile = (props) => {
  const { toggleModal } = props;
  return (
    <div className="profile">
      <h1 className="profile__Title">Anthony Jackson</h1>
      <div>
        <img src="" ></img>
        <div className="profile__Description">
          <p>Hi I’m Anthony most people call me Andy. I Enjoy cooking, listening to music, and playing with my dog. Looking forward to connecting to other creatives. </p>
          <p>Location: Vancouver, B.C.</p>
        </div>
      </div>
      <div>
        <h2 className="profile__Title">Recent Projects</h2>
        <p className="profile_Description">Vegan Mac and Cheese</p>
        <p className="profile_Description">Landscape Mountains</p>
        <p className="profile_Description">Lyrical Poem</p>
      </div>
      <button className="profile__Btn" onClick={() => toggleModal(false)}>CLOSE</button>
    </div>
  );
};

export default Profile;
