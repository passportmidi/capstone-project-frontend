import { useState } from "react";
import "./App.scss";
import Table from "./components/Table/Table";
import SearchBar from "./components/SearchBar/SearchBar";
import AmountInput from "./components/AmountInput/AmountInput";
import Toggle from "./components/Toggle/Toggle";

function App() {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [selected, setSelected] = useState("");

  return (
    <>
      <h1 className="app__title">RecipeWizard</h1>
      <p>Selected value: {selected}</p>
      <SearchBar setInput={setInput} />
      <AmountInput setAmount={setAmount} />
      <Toggle setSelected={setSelected} />
      <Table filter={input} amount={amount} selected={selected} />
    </>
  );
}

export default App;
