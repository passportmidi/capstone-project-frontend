export default function EditModal({ onClose }) {
  return (
    <div className="modal">
      <div>I'm a modal dialog for deleting :^)</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
