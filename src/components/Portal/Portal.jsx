import { useState } from "react";
import { createPortal } from "react-dom";
import AddModal from "../AddModal/AddModal";

export default function Portal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal &&
        createPortal(
          <AddModal onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
