import { React, useState, useEffect } from "react";
import { Url_Games, api_key } from "../Components/Links/Link.jsx";
import Cards from "../Components/Cards/Cards.jsx";
import Drawer from "../Components/Drawer/Drawer.jsx";
import "../Screens/Css/Games.css";

function Games() {
  const [videoGames, setVideoGames] = useState([]);
  const [prices, setPrices] = useState([]);

  const handleRandomPrices = () => {
    const min = 2000;
    const max = 5000;
    const randomPrice = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomPrice;
  };

  const getRandomCondition = () => {
    const conditions = ["New", "Used"];
    const randomIndex = Math.floor(Math.random() * conditions.length);
    return conditions[randomIndex];
  };
  const getRandomPlatform = () => {
    const Platform = ["0", "1"];
    const randomIndex = Math.floor(Math.random() * Platform.length);
    return Platform[randomIndex];
  };

  const getRandomFormat = () => {
    const Format = ["Physical", "Digital"];
    const randomIndex = Math.floor(Math.random() * Format.length);
    return Format[randomIndex];
  };

  useEffect(() => {
    fetch(Url_Games + api_key)
      .then((res) => res.json())
      .then((data) => {
        setVideoGames(data.results);
        const randomPrices = data.results.map(() => handleRandomPrices());
        setPrices(randomPrices);
      });
  }, []);

  return (
    <div className="flex">
      <div className="" id="drawerGames">
        <Drawer />
      </div>
      <div className="w-3/4 p-4 ">
        <h1 id="tituloGames">Games</h1>
        <div className="flex flex-wrap justify-start" id="CardProducto">
          {videoGames.length > 0 ? (
            videoGames
              .slice(0, 20)
              .map((gamer, index) => (
                <Cards
                  key={gamer.id}
                  customKey={gamer.id}
                  name={gamer.name}
                  background_image={gamer.background_image}
                  price={prices[index]}
                  console={
                    gamer.parent_platforms[getRandomPlatform()].platform.name
                  }
                  format={getRandomFormat()}
                  conditions={getRandomCondition()}
                  released={gamer.released}
                  genres={gamer.genres}
                  Rank={gamer.rating}
                />
              ))
          ) : (
            <>
              <span className="loading loading-dots loading-xs"></span>
              <span className="loading loading-dots loading-sm"></span>
              <span className="loading loading-dots loading-md"></span>
              <span className="loading loading-dots loading-lg"></span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Games;
