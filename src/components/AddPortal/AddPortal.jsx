import { useState } from "react";
import { createPortal } from "react-dom";
import AddModal from "../AddModal/AddModal";

export default function AddPortal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        + Add custom ingredient
      </button>
      {showModal &&
        createPortal(
          <AddModal onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
