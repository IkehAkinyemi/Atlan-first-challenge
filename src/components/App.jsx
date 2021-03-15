import { useState } from "react";
import Search from "./search/Search";
import Banner from "./banner/Banner";
import Header from "./header/Header";
import SearchResult from "./searchResult/searchResult";

export default function App() {
  const [checkboxState, setCheckboxState] = useState({
    players: false,
    owners: false,
    teams: false,
    venues: false
  });

  const handleCheckboxChange = (e) => {
    const idValue = e.target.closest(".container").id;
    setCheckboxState((prev) => ({
      ...prev,
      [idValue]: e.target.checked
    }));
  };

  return (
    <div className="App">
      <Header />
      <Banner />
      <Search
        checkboxState={checkboxState}
        handleCheckboxChange={handleCheckboxChange}
      />
      <SearchResult checkboxState={checkboxState} />
    </div>
  );
}
