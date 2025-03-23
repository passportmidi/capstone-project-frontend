import axios from "axios";
import { useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function AddModal({ onCloseFunction }) {
  const [values, setValues] = useState({
    name: "",
    volume: "",
    grams: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(values);
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/ingredients`, values);
      onCloseFunction();
    } catch (e) {
      console.error("Error creating ingredient:", e);
    }
  };
  return (
    <div className="modal">
      <h2>Add Ingredient</h2>
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
          placeholder="e.g. 1 1/2 cups, 2 tbsp"
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
