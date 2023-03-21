const API_KEY = import.meta.env.API_KEY;
import { useState } from "react";

function Card({
  visitedCats,
  setVisitedCats,
  bannedOrigins,
  setBannedOrigins,
}) {
  const [currentCat, setCurrentCat] = useState({
    breedName: "",
    imageURL: "",
    countryOrigin: "",
    temperament: "",
    description: "",
  });

  const makeQuery = () => {
    let query = `https://api.thecatapi.com/v1/images/search?api_key=live_F8NqMN30nIQXja5xoym0fv9W6wrSkPf8a37guWXhayaiteB8xeEVM9C4Sgqs5ZqU&has_breeds=1`;
    callAPI(query).catch(console.error);
  };

  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();

    if (json && json.length > 0) {
      const parsedJson = parseJson(json);

      console.log("json breed", parsedJson.breedName);
      if (containsBanned(parsedJson, bannedOrigins)) {
        makeQuery();
      } else {
        setCurrentCat(parsedJson);
        setVisitedCats([parsedJson, ...visitedCats]);
        console.log(visitedCats);
        console.log(bannedOrigins);
      }
    } else {
      alert("Oops! Something went wrong with that query, let's try again!");
    }
  };

  const parseJson = (json) => {
    return {
      breedName: json[0].breeds[0].name,
      imageURL: json[0].url,
      countryOrigin: json[0].breeds[0].origin,
      temperament: json[0].breeds[0].temperament,
      description: json[0].breeds[0].description,
    };
  };

  const containsBanned = (json, bannedOrigins) => {
    if (bannedOrigins.includes(json.countryOrigin)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="Card">
      <h1>Cat Facts!</h1>
      <h2>Discover cute and interesting cats from all over the world</h2>

      {currentCat.breedName !== "" ? (
        <div className="main">
          <h3>{currentCat.breedName}</h3>
          <img
            className="screenshot"
            src={currentCat.imageURL}
            alt="Cat Image"
          />
          <button
            type="submit"
            className="originButton"
            onClick={() => {
              setBannedOrigins([...bannedOrigins, currentCat.countryOrigin]);
            }}
          >
            {currentCat.countryOrigin}
          </button>
          <div>{currentCat.temperament}</div>
          <br></br>
          <div>{currentCat.description}</div>
        </div>
      ) : (
        ""
      )}

      <button type="submit" className="nextButton" onClick={makeQuery}>
        😺Next Kitty😺
      </button>
    </div>
  );
}

export default Card;
