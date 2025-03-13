import editIcon from "../../assets/images/ic--baseline-edit.svg";
import deleteIcon from "../../assets/images/ic--baseline-delete.svg";

export default function Table() {
  return (
    <table>
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
    </table>
  );
}
