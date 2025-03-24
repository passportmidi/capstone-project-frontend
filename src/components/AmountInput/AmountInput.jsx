export default function AmountInput({ setAmount, selected }) {
  return (
    <div className="amount__wrapper">
      <label className="amount__label">
        Amount:
        <input
          className="amount__input"
          placeholder={
            selected === "cups" ? "e.g. 2, 4 1/2, 3.5..." : "e.g. 4, 1.8..."
          }
          onChange={(e) => setAmount(e.target.value.trimEnd())}
        />
      </label>
    </div>
  );
}
