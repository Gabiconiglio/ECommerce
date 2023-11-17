import Drawer from "../Components/Drawer/Drawer.jsx";
import TxtAccessories from "../Components/Imagines/TxtAccessories.jpg";
import "../Screens/Css/Accessories.css"

function Accessories() {
  return (
    <div>
      <div className="flex">
        <div className="" id="drawerAccsessories">
          <Drawer plat={false} ranking={false} />
        </div>
        <div className="w-3/4 p-4 ">
          <img src={TxtAccessories} alt="TxtGames" className="photoAccessories" />
          <div className="flex flex-wrap justify-start" id="CardConsole"></div>
        </div>
      </div>
    </div>
  );
}

export default Accessories;