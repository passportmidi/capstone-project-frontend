import editIcon from "../../assets/images/ic--baseline-edit.svg";
import deleteIcon from "../../assets/images/ic--baseline-delete.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import Fraction from "fraction.js";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function Table({ filter, amount, selected }) {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    fetchIngredients();
  }, [filter, amount, selected]);

  function handleVolume(vol, unit) {
    if (unit.startsWith("cup")) {
      if (vol === "1") {
        return " cup";
      } else {
        return " cups";
      }
    } else {
      return " " + unit;
    }
  }

  async function fetchIngredients() {
    try {
      const { data } = await axios.get(`${BASE_URL}/ingredients`);
      const filteredData = data.filter((ingredient) =>
        ingredient.name.toLowerCase().includes(filter.toLowerCase())
      );
      if (amount) {
        if (selected === "grams") {
          filteredData.forEach((ingredient) => {
            let orig = ingredient.grams; // original gram value
            let volumeArr = ingredient.volume.split(" ");
            let frac = volumeArr[0];
            let unit = volumeArr[1];
            let volume = new Fraction(frac)
              .mul(amount / orig)
              .toFraction(true)
              .trimEnd();

            ingredient.grams = amount;
            ingredient.volume = volume + handleVolume(volume, unit); // show mixed fraction
          });
        }
      }
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
