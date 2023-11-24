import { React} from "react";
import UseFirestoreData from "../Components/Hook/useFetchFire.js"
import Loading from "../Components/Loading/Loading.jsx"
import Cards from "../Components/Cards/Cards.jsx";
import Drawer from "../Components/Drawer/Drawer.jsx";
import TxtGames from "../Components/Imagines/TxtGames.png"
import "../Screens/Css/Games.css";

function Games() {

  const { ItemCard, loading } = UseFirestoreData('Games','category', 'Games');


  return (
    <div className="flex">
      <div className="" id="drawerGames">
        <Drawer plat={true} ranking={true} />
      </div>
      <div className="w-3/4 p-4 " id="SepGames">
        <img src={TxtGames} alt="TxtGames" className="photoGames" />
        <div className="flex flex-wrap justify-start" id="CardProducto">
          {ItemCard.length > 0 ? (
            ItemCard
              .map((gamer) => (
                <Cards
                  key={gamer.key}
                  customKey={gamer.key}
                  name={gamer.name}
                  background_image={gamer.background_image}
                  price={gamer.price}
                  console={gamer.console}
                  format={gamer.format}
                  conditions={gamer.conditions}
                  category={gamer.category}
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
