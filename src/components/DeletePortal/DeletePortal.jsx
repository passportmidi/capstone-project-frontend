import { useState } from "react";
import { createPortal } from "react-dom";
import DeleteModal from "../DeleteModal/DeleteModal";
import deleteIcon from "../../assets/images/ic--baseline-delete.svg";

export default function DeletePortal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <img
        className="icon"
        src={deleteIcon}
        alt="Delete"
        onClick={() => setShowModal(true)}
      />
      {showModal &&
        createPortal(
          <DeleteModal onCloseFunction={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
