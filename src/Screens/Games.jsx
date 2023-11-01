import Cards from "../Components/Cards/Cards.jsx";
import Drawer from "../Components/Drawer/Drawer.jsx";
import "../Screens/Css/Games.css";

function Games() {
  return (
    <div className="flex">
      <div className="" id="drawerGames">
        <Drawer />
      </div>
      <div className="w-3/4 p-4 ">
        <h1 id="tituloGames">Games</h1>
        <div className="flex flex-wrap justify-start" id="CardProducto">
          <Cards name={"Mafia 2"} price={"2000"} />
          <Cards name={"Mafia 2"} price={"2000"} />
          <Cards name={"Mafia 2"} price={"2000"} />
          <Cards name={"Mafia 2"} price={"2000"} /> 
          <Cards name={"Mafia 2"} price={"2000"} /> 
        </div>
      </div>
    </div>
  );
}

export default Games;