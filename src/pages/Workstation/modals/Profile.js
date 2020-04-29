import React from "react";

const Profile = (props) => {
  const { toggleModal } = props;
  return (
    <div>
      <h1>Profile PAGE</h1>
      <button onClick={() => toggleModal(false)}>CLOSE</button>
    </div>
  );
};

export default Profile;
