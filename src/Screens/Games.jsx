import { React, useState, useEffect } from "react";
import { Url_Games, api_key } from "../Components/Links/Link.jsx";
import { useFetch } from "../Components/Hook/useEffect.js";
import Loading from "../Components/Loading/Loading.jsx"
import Cards from "../Components/Cards/Cards.jsx";
import Drawer from "../Components/Drawer/Drawer.jsx";
import "../Screens/Css/Games.css";

function Games() {
  
  const url=Url_Games + api_key
  const [prices, setPrices] = useState([]);
  const [data] = useFetch(url);


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
  

  return (
    <div className="flex">
      <div className="" id="drawerGames">
        <Drawer plat={true} ranking={true} />
      </div>
      <div className="w-3/4 p-4 ">
        <h3 id="tituloGames">Games</h3>
        <div className="flex flex-wrap justify-start" id="CardProducto">
          {data.length > 0 ? (
            data
              .slice(0, 20)
              .map((gamer, index) => (
                <Cards
                  key={gamer.id}
                  customKey={gamer.id}
                  name={gamer.name}
                  background_image={gamer.background_image}
                  price={handleRandomPrices()}
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
          <Loading/>
          )}
        </div>
      </div>
    </div>
  );
}

export default Games;
