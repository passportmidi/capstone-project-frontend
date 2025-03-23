import axios from "axios";
import { useEffect, useState } from "react";
import Fraction from "fraction.js";
import AddPortal from "../AddPortal/AddPortal";
import EditPortal from "../EditPortal/EditPortal";
import DeletePortal from "../DeletePortal/DeletePortal";
import "./Table.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function Table({ filter, amount, selected }) {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    fetchIngredients();
  }, [filter, amount, selected]);

  function handleVolume(vol, unit) {
    if (unit.startsWith("cup")) {
      if (vol.includes("/")) {
        // if a fraction
        if (vol.includes(" ")) {
          // if a mixed fraction
          return " cups";
        } else {
          // if a proper fraction
          return " cup";
        }
      } else {
        // if a whole number
        if (vol === "1") {
          return " cup";
        } else {
          return " cups";
        }
      }
    } else {
      return " " + unit;
    }
  }

  async function fetchIngredients() {
    try {
      const { data } = await axios.get(`${BASE_URL}/ingredients`);
      let filteredData = data;
      if (filter) {
        filteredData = data.filter((ingredient) =>
          ingredient.name.toLowerCase().includes(filter.toLowerCase())
        );
      }
      if (amount) {
        filteredData.forEach((ingredient) => {
          console.log(ingredient);
          // split volume into fraction and unit (split on last space in string)
          let volumeArr = ingredient.volume.split(/\s+(?!.+ )/);
          let frac = volumeArr[0];
          let unit = volumeArr[1];

          if (selected === "grams") {
            let orig = ingredient.grams; // original gram value
            // parse original volume value as a fraction
            let volume = new Fraction(frac)
              .mul(amount / orig)
              .roundTo("1/8")
              .toFraction(true)
              .trimEnd();
            // update grams based on user input
            ingredient.grams = amount;
            // show calculated volume as mixed fraction
            ingredient.volume = volume + handleVolume(volume, unit);
          } else if (selected === "cups") {
            // store original volume value as a fraction
            let orig = new Fraction(frac);
            // store user input as a fraction and a fraction string
            let input = new Fraction(amount);
            let inputString = input.toFraction(true).trimEnd();
            // calculate grams equivalent to user-input volume amount
            ingredient.grams = Math.ceil(
              input.div(orig).mul(ingredient.grams).valueOf()
            );
            // update volume based on user input
            ingredient.volume = inputString + handleVolume(inputString, unit);
          }
        });
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
    <table className="table">
      <thead className="table__header">
        <tr className="table__row">
          <th className="table__heading table__heading--ingredient">
            Ingredient
            <AddPortal refresh={() => fetchIngredients()} />
          </th>
          <th className="table__heading">Volume</th>
          <th className="table__heading">Weight</th>
        </tr>
      </thead>
      <tbody className="table__body">
        {/* map ingredients from database to table */}
        {ingredients.map((ingredient) => {
          return (
            <tr className="table__row" key={ingredient.id}>
              <td className="table__data">
                <div className="table__name-data">
                  {ingredient.name}
                  {/* if it's a custom ingredient, add edit and delete buttons */}
                  {ingredient.custom === 1 && (
                    <div className="table__name-icons">
                      <EditPortal
                        id={ingredient.id}
                        refresh={() => fetchIngredients()}
                      />
                      <DeletePortal
                        id={ingredient.id}
                        refresh={() => fetchIngredients()}
                      />
                    </div>
                  )}
                </div>
              </td>
              <td className="table__data">{ingredient.volume}</td>
              <td className="table__data">{ingredient.grams}g</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
