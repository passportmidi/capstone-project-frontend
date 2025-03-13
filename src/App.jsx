import Table from "./components/Table/Table";
import SearchBar from "./components/SearchBar/SearchBar";
import AmountInput from "./components/AmountInput/AmountInput";
import Toggle from "./components/Toggle/Toggle";

function App() {
  return (
    <>
      <h1>Ingredient Weight Calculator</h1>
      <SearchBar />
      <AmountInput />
      <Toggle />
      <Table />
    </>
  );
}

export default App;
