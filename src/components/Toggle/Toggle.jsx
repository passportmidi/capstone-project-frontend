import "./Toggle.scss";

export default function Toggle() {
  return (
    // <div className="toggle">
    //   <input
    //     label="Cups"
    //     type="radio"
    //     className="toggle__input"
    //     defaultChecked
    //   />
    //   <input label="Grams" type="radio" className="toggle__input" />
    // </div>
    <div className="toggle">
      <input
        className="toggle__input"
        label="Cups"
        type="radio"
        name="unit"
        value="cups"
        defaultChecked
      />
      <input
        className="toggle__input"
        label="Grams"
        type="radio"
        name="unit"
        value="grams"
      />
    </div>
  );
}
