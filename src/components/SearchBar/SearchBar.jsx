import "./SearchBar.scss";
import { useState } from "react";

export default function SearchBar() {
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
    // console.log(input);
  };
  return (
    <div className="search__wrapper">
      <label className="search__label">
        Ingredient:
        <input
          className="search__input"
          placeholder="Search for ingredient..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </label>
    </div>
  );
}
