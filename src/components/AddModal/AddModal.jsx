export default function AddModal({ onClose }) {
  return (
    <div className="modal">
      <h2>Add Ingredient</h2>
      <label>
        Ingredient name:
        <input />
      </label>
      <label>
        Volume:
        <input />
        cups
      </label>
      <label>
        Weight:
        <input />
        grams
      </label>
      <button onClick={onClose}>Submit</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
