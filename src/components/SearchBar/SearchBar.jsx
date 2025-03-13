import searchIcon from "../../assets/images/ic--baseline-search.svg";
import "./SearchBar.scss";

export default function SearchBar() {
  return (
    <div className="search__wrapper">
      <label className="search__label">Ingredient:
      <input placeholder="Search for ingredient..."/>
      </label>
    </div>
  );
}
