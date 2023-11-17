import Drawer from "../Components/Drawer/Drawer.jsx";
import TxtConsole from "../Components/Imagines/TxtConsole.png";
import "../Screens/Css/Console.css";

function Console() {
  return (
    <div>
      <div className="flex">
        <div className="" id="drawerConsole">
          <Drawer plat={false} ranking={false} />
        </div>
        <div className="w-3/4 p-4 ">
          <img src={TxtConsole} alt="TxtGames" className="photoConsole" />
          <div className="flex flex-wrap justify-start" id="CardConsole"></div>
        </div>
      </div>
    </div>
  );
}

export default Console;
