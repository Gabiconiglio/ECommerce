import { React} from "react";
import UseFirestoreData from "../Components/Hook/useFetchFire.js"
import Loading from "../Components/Loading/Loading.jsx"
import CardsConsole from "../Components/Cards/CardsConsole.jsx";
import Drawer from "../Components/Drawer/Drawer.jsx";
import TxtConsole from "../Components/Imagines/TxtConsole.png";
import "../Screens/Css/Console.css";

function Console() {

  const { ItemCard, loading } = UseFirestoreData('Games','category', 'Console');
 
  return (
    <div>
      <div className="flex">
        <div className="" id="drawerConsole">
          <Drawer plat={false} ranking={false} />
        </div>
        <div className="w-3/4 p-4 ">
          <img src={TxtConsole} alt="TxtGames" className="photoConsole" />
          <div className="flex flex-wrap justify-start" id="CardProducto">
            {ItemCard.length > 0 ? (
              ItemCard.map((gamer) => (
                <CardsConsole
                  key={gamer.key}
                  customKey={gamer.key}
                  name={gamer.name}
                  background_image={gamer.background_image}
                  price={gamer.price}
                  conditions={gamer.conditions}
                  category={gamer.category}
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

export default Console;
