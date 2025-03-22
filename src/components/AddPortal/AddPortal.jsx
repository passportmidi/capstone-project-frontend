import { useState } from "react";
import { createPortal } from "react-dom";
import AddModal from "../AddModal/AddModal";

export default function AddPortal({ refresh }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        + Add custom ingredient
      </button>
      {showModal &&
        createPortal(
          <AddModal
            onCloseFunction={() => {
              setShowModal(false);
              refresh();
            }}
          />,
          document.body
        )}
    </>
  );
}
