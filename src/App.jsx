import Table from "./components/Table/Table";
import SearchBar from "./components/SearchBar/SearchBar";
import AmountInput from "./components/AmountInput/AmountInput";

function App() {
  return (
    <>
      <h1>Ingredient Weight Calculator</h1>
      <SearchBar />
      <AmountInput />
      <Table />
    </>
  );
}

export default App;
