import "./Toggle.scss";

export default function Toggle({ setSelected }) {
  return (
    <div className="toggle">
      <input
        className="toggle__input"
        label="Volume"
        type="radio"
        name="unit"
        value="cups"
        onChange={(e) => {
          setSelected(e.target.value);
        }}
        defaultChecked
      />
      <input
        className="toggle__input"
        label="Weight"
        type="radio"
        name="unit"
        value="grams"
        onChange={(e) => {
          setSelected(e.target.value);
        }}
      />
    </div>
  );
}
