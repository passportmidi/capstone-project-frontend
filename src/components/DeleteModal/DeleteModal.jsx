import axios from "axios";

export default function DeleteModal({ onCloseFunction, id }) {
  const handleDelete = async (e) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/ingredients/${id}`
      );
      onCloseFunction();
    } catch (e) {
      console.error("Error deleting ingredient:", e);
    }
  };

  return (
    <div className="modal">
      <div>Are you sure you want to delete this ingredient?</div>
      <button className="btn" onClick={handleDelete}>
        Yes, delete it
      </button>
      <button className="btn" onClick={onCloseFunction}>
        No, cancel
      </button>
    </div>
  );
}
