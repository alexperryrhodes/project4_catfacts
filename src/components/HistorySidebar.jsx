import { useState } from "react";

function HistorySidebar({ visitedCats }) {
  return (
    <div className="HistorySidebar">
      <h2>History</h2>
      {visitedCats.length > 0 ? <div><p>{visitedCats[0].breedName}</p> <img className="catSidebar" src={visitedCats[0].imageURL} alt="Cat Image" /></div> : ""}
      {visitedCats.length > 1 ? <div><p>{visitedCats[1].breedName}</p> <img className="catSidebar" src={visitedCats[1].imageURL} alt="Cat Image" /></div> : ""}
      {visitedCats.length > 2 ? <div><p>{visitedCats[2].breedName}</p> <img className="catSidebar" src={visitedCats[2].imageURL} alt="Cat Image" /></div> : ""}
    </div>
  );
}

export default HistorySidebar;
