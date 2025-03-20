import { useState } from "react";
import "./App.scss";
import Table from "./components/Table/Table";
import SearchBar from "./components/SearchBar/SearchBar";
import AmountInput from "./components/AmountInput/AmountInput";
import Toggle from "./components/Toggle/Toggle";

function App() {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <>
      <h1 className="app__title">RecipeWizard</h1>
      <SearchBar setInput={setInput} />
      <AmountInput setAmount={setAmount} />
      <Toggle />
      <Table filter={input} amount={amount} />
    </>
  );
}

export default App;
