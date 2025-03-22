export default function EditModal({ onCloseFunction }) {
  return (
    <div className="modal">
      <div>I'm a modal dialog, but for editing this time</div>
      <button onClick={onCloseFunction}>Close</button>
    </div>
  );
}
