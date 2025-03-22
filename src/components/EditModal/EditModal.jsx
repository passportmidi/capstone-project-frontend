export default function EditModal({ onClose }) {
  return (
    <div className="modal">
      <div>I'm a modal dialog, but for editing this time</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
