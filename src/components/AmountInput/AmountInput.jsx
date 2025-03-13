import { useState } from "react";

export default function AmountInput() {
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
    console.log(input);
  };
  return (
    <div className="amount__wrapper">
      <label className="amount__label">
        Amount:
        <input
          className="amount__input"
          placeholder="Enter amount"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </label>
    </div>
  );
}
