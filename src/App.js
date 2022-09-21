// Components
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import FoodGallery from "./components/FoodGallery";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBox />
      <FoodGallery data={data} />
    </div>
  );
}

export default App;
