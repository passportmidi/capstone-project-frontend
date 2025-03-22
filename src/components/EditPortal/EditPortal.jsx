import { useState } from "react";
import { createPortal } from "react-dom";
import EditModal from "../EditModal/EditModal";
import editIcon from "../../assets/images/ic--baseline-edit.svg";

export default function EditPortal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <img
        className="icon"
        src={editIcon}
        alt="Edit"
        onClick={() => setShowModal(true)}
      />
      {showModal &&
        createPortal(
          <EditModal onCloseFunction={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
