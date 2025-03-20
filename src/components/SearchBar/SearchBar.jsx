import "./SearchBar.scss";

export default function SearchBar({ setInput }) {
  return (
    <div className="search__wrapper">
      <label className="search__label">
        Ingredient:
        <input
          className="search__input"
          placeholder="Search for ingredient..."
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </label>
    </div>
  );
}
