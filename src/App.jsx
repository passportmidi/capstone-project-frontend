import { useState } from "react";
import "./App.scss";
import Table from "./components/Table/Table";
import SearchBar from "./components/SearchBar/SearchBar";
import AmountInput from "./components/AmountInput/AmountInput";
import Toggle from "./components/Toggle/Toggle";
import wizardImg from "./assets/images/wizard.png";

function App() {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [selected, setSelected] = useState("");

  return (
    <>
      <div className="app__title">
        <img
          className="app__title-image"
          src={wizardImg}
          alt="A wizard cooking in a cauldron"
        ></img>
        <h1 className="app__title-text">
          Recipe
          <wbr />
          Wizard
        </h1>
      </div>
      <div className="app__container">
        <div className="app__controls">
          <SearchBar setInput={setInput} />
          <AmountInput setAmount={setAmount} />
          <Toggle setSelected={setSelected} />
        </div>
        <Table filter={input} amount={amount} selected={selected} />
      </div>
    </>
  );
}

export default App;
