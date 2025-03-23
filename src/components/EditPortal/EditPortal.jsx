import { useState } from "react";
import { createPortal } from "react-dom";
import EditModal from "../EditModal/EditModal";
import editIcon from "../../assets/images/iconamoon--edit-duotone.svg";

export default function EditPortal({ refresh, id }) {
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
          <EditModal
            onCloseFunction={() => {
              setShowModal(false);
              refresh();
            }}
            id={id}
          />,
          document.body
        )}
    </>
  );
}
