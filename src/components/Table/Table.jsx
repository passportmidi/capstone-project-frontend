import editIcon from "../../assets/images/ic--baseline-edit.svg";
import deleteIcon from "../../assets/images/ic--baseline-delete.svg";
import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function Table({ filter, amount, selected }) {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    fetchIngredients();
  }, [filter, amount]);

  async function fetchIngredients() {
    try {
      const { data } = await axios.get(`${BASE_URL}/ingredients`);
      const filteredData = data.filter((ingredient) =>
        ingredient.name.toLowerCase().includes(filter.toLowerCase())
      );
      if (amount) {
        filteredData.forEach((ingredient) => (ingredient.grams = amount));
      }
      // TODO: maybe add function to filter on volume/weight here
      setIngredients(filteredData);
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
        {/* map ingredients from database to table */}
        {ingredients.map((ingredient) => {
          return (
            <tr key={ingredient.id}>
              <td>
                {ingredient.name}
                {/* if it's a custom ingredient, add edit and delete buttons */}
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
