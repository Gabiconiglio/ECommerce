import Drawer from "../Components/Drawer/Drawer.jsx";
import "../Screens/Css/Console.css";

function Console() {
  return (
    <div>
      <h3 id="titleConsole">Console</h3>
      <div className="flex">
        <div className="" id="drawerConsole">
          <Drawer plat={false} ranking={false} />
        </div>
      </div>
    </div>
  );
}

export default Console;
