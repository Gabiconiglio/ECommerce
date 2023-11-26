import { React } from "react";
import UseFirestoreData from "../Components/Hook/useFetchFire.js";
import Loading from "../Components/Loading/Loading.jsx";
import Cards from "../Components/Cards/Cards.jsx";
import Drawer from "../Components/Drawer/Drawer.jsx";
import TxtAccessories from "../Components/Imagines/TxtAccessories.jpg";
import "../Screens/Css/Accessories.css";

function Accessories() {
  const { ItemCard } = UseFirestoreData("Games", "category", "Accessories");

  return (
    <div>
      <div className="flex">
        <div className="" id="drawerAccsessories">
          <Drawer plat={false} ranking={false} />
        </div>
        <div className="w-3/4 p-4 " id="SepAccessories">
          <img
            src={TxtAccessories}
            alt="TxtGames"
            className="photoAccessories"
          />
          <div className="flex flex-wrap justify-start" id="CardProducto">
            {ItemCard.length > 0 ? (
              ItemCard.map((gamer) => (
                <Cards
                  key={gamer.key}
                  customKey={gamer.key}
                  name={gamer.name}
                  background_image={gamer.background_image}
                  price={gamer.price}
                  conditions={gamer.conditions}
                  category={gamer.category}
                  console={gamer.console}
                />
              ))
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accessories;
