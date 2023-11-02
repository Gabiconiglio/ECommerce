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
  const getRandomPlataform = () => {
    const Plataform = ["0","1","2"];
    const randomIndex = Math.floor(Math.random() * Plataform.length);
    return Plataform[randomIndex];
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
        const results = data.results;
        setVideoGames(results);
        console.log(results)
        
        const randomPrices = results.map(() => handleRandomPrices());
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
                  name={gamer.name}
                  background_image={gamer.background_image}
                  price={prices[index]}
                  console={gamer.parent_platforms[getRandomPlataform()].platform.name}
                  format={getRandomFormat()}
                  conditions={getRandomCondition()}
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
