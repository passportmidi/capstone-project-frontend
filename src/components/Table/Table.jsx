import editIcon from "../../assets/images/ic--baseline-edit.svg";
import deleteIcon from "../../assets/images/ic--baseline-delete.svg";
import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function Table() {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    fetchIngredients();
  }, []);

  async function fetchIngredients() {
    try {
      const { data } = await axios.get(`${BASE_URL}/ingredients`);
      setIngredients(data);
    } catch (e) {
      console.log("Error fetching ingredients:", e);
    }
  }

  if (!ingredients) {
    return <div>Loading...</div>;
  }

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
        {ingredients.map((ingredient) => {
          return (
            <tr key={ingredient.id}>
              <td>
                {ingredient.name}
                {ingredient.custom === 1 && (
                  <>
                    <img src={editIcon} alt="Edit" />
                    <img src={deleteIcon} alt="Delete" />
                  </>
                )}
              </td>
              <td>{ingredient.volume}</td>
              <td>{ingredient.grams}g</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
