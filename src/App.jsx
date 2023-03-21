import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import HistorySidebar from "./components/HistorySidebar";
import BanSidebar from "./components/BanSidebar";

function App() {
  const [visitedCats, setVisitedCats] = useState([]);
  const [bannedOrigins, setBannedOrigins] = useState([]);

  return (
    <div className="App">
      <HistorySidebar visitedCats={visitedCats} />

      <Card
        visitedCats={visitedCats}
        setVisitedCats={setVisitedCats}
        bannedOrigins={bannedOrigins}
        setBannedOrigins={setBannedOrigins}
      />

      <BanSidebar bannedOrigins={bannedOrigins} />
    </div>
  );
}

export default App;
