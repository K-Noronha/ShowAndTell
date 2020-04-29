import React from "react";
import Challenge from "./modals/Challenge";
import Upload from "./modals/Upload";
import UploadCreation from "./modals/UploadCreation";
import Profile from "./modals/Profile";

const modalContent = (type, toggleModal) => {
  switch (type) {
    case "challenge":
      return <Challenge toggleModal={toggleModal} />;
    case "upload":
      return <Upload toggleModal={toggleModal} />;
    case "uploadCreation":
      return <UploadCreation toggleModal={toggleModal} />;
    case "profile":
      return <Profile toggleModal={toggleModal} />;
  }
};

const Modal = (props) => {
  const { type, toggleModal } = props;
  return (
    <div className="modal">
      <div className="modal__content">{modalContent(type, toggleModal)}</div>
    </div>
  );
};

export default Modal;
