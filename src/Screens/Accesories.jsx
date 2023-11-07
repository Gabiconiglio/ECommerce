import Drawer from "../Components/Drawer/Drawer.jsx";
import "../Screens/Css/Accessories.css"

function Accessories() {
  return (
    <div>
      <h3 id="titleAccesories">Accessories</h3>
      <div className="flex">
        <div className="" id="drawerAccessories">
          <Drawer plat={false} ranking={false} />
        </div>
      </div>
    </div>
  );
}

export default Accessories;