import { useToggle } from "../Hook/ToggleContext";
import Checkbox from "../CheckBox/CheckBox.jsx"
import "../Drawer/Drawer.css";

function Drawer() {
  const { isChecked } = useToggle();

  return (
    <>
      <div
        className={`menu bg-base-200 w-56 rounded-box ${
          isChecked ? "border-base-400" : "border-warning"
        }`}
        id="menu2"
        data-theme={isChecked ? "light" : "dark"}
      >
        <h3 className="titleDrawer">Search Filters</h3>
        <ul>
          <li className="filtersConditions">
            <Checkbox title={"Conditions"} condition1={"New"} condition2={"Used"}/>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Drawer;
