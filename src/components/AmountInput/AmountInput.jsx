export default function AmountInput({ setAmount }) {
  return (
    <div className="amount__wrapper">
      <label className="amount__label">
        Amount:
        <input
          className="amount__input"
          placeholder="Enter amount"
          onChange={(e) => setAmount(e.target.value.trimEnd())}
        />
      </label>
    </div>
  );
}
