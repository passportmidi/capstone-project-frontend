import axios from "axios";
import { useState, useEffect } from "react";

export default function EditModal({ onCloseFunction, id }) {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const [values, setValues] = useState(null);

  useEffect(() => {
    fetchIngredient();
  }, []);

  async function fetchIngredient() {
    try {
      const { data } = await axios.get(`${BASE_URL}/ingredients/${id}`);
      setValues(data);
    } catch (e) {
      console.log("Error fetching ingredient:", e);
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `${BASE_URL}/ingredients/${id}`,
        values
      );
      onCloseFunction();
    } catch (e) {
      console.error("Error editing ingredient:", e);
    }
  };

  if (!values) {
    return <div className="modal">Loading...</div>;
  }
  return (
    <div className="modal">
      <h2>Edit Ingredient</h2>
      <label>
        Ingredient name:
        <input name="name" value={values.name} onChange={handleInputChange} />
      </label>
      <label>
        Volume:
        <input
          name="volume"
          value={values.volume}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Weight:
        <input name="grams" value={values.grams} onChange={handleInputChange} />
        grams
      </label>
      <button className="btn" onClick={handleSubmit}>
        Submit
      </button>
      <button className="btn" onClick={onCloseFunction}>
        Cancel
      </button>
    </div>
  );
}
