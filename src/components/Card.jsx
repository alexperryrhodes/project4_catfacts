const API_KEY = import.meta.env.API_KEY;
import { useState } from "react";

function Card() {
  const [currentCat, setCurrentCat] = useState({
    breedName: "",
    imageURL: "",
    countryOrigin: "",
    temperament: "",
    description: "",
  });

  const makeQuery = () => {
    let query = `https://api.thecatapi.com/v1/images/search?api_key=live_F8NqMN30nIQXja5xoym0fv9W6wrSkPf8a37guWXhayaiteB8xeEVM9C4Sgqs5ZqU&has_breeds=1`;
    console.log("que", query);
    callAPI(query).catch(console.error);
  };

  const callAPI = async (query) => {
    const response = await fetch(query);
    console.log("res:", response);
    const json = await response.json();
    console.log("json", json);
    console.log("json breed", json[0].breeds[0].name);
    if (json && json.length > 0) {
      setCurrentCat({
        breedName: json[0].breeds[0].name,
        imageURL: json[0].url,
        countryOrigin: json[0].breeds[0].origin,
        temperament: json[0].breeds[0].temperament,
        description: json[0].breeds[0].description,
      });
    } else {
      alert("Oops! Something went wrong with that query, let's try again!");
    }
  };

  return (
    <div className="Card">
      <h1>Cat Facts!</h1>
      <h2>Discover cute and interesting cats from all over the world</h2>
      <div>{currentCat.breedName}</div>
      <img className="screenshot" src={currentCat.imageURL} alt="Cat Image" />
      <div>{currentCat.countryOrigin}</div>
      <div>{currentCat.temperament}</div>
      <div>{currentCat.description}</div>
      <button type="submit" className="button" onClick={makeQuery}>
      😺Next Kitty😺
      </button>
    </div>
  );
}

export default Card;
