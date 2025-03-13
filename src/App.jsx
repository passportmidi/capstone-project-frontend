import searchIcon from "../src/assets/images/ic--baseline-search.svg";
import editIcon from "../src/assets/images/ic--baseline-edit.svg";
import deleteIcon from "../src/assets/images/ic--baseline-delete.svg";

function App() {
  return (
    <>
      <h1>Ingredient Weight Calculator</h1>
      <thead>
        <tr>
          <th>
            Ingredient<button>+ Add custom ingredient</button>
          </th>
          <th>Volume</th>
          <th>Weight</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>All-Purpose Flour</td>
          <td>1 cup</td>
          <td>120g</td>
        </tr>
        <tr>
          <td>
            Custom ingredient
            <img src={editIcon} alt="Edit" />
            <img src={deleteIcon} alt="Delete" />
          </td>
          <td>1 cup</td>
          <td>150g</td>
        </tr>
      </tbody>
    </>
  );
}

export default App;
