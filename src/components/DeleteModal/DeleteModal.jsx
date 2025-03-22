export default function EditModal({ onCloseFunction }) {
  return (
    <div className="modal">
      <div>I'm a modal dialog for deleting :^)</div>
      <button onClick={onCloseFunction}>Close</button>
    </div>
  );
}
