import { React, useState } from "react";
import { useToggle } from "../Context/ToggleContext.jsx";
import Checkbox from "../CheckBox/CheckBox.jsx";
import RangeDrawer from "../Range/Range.jsx";
import RadioButton from "../RadioButton/RadioButton.jsx";
import "../Drawer/Drawer.css";

function Drawer(props) {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const plataform = props.plat;
  const ranking = props.ranking;

  const handlePlatformChange = (platform) => {
    setSelectedPlatform(platform);
  };
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
          <li>
            <Checkbox
              title={"Conditions"}
              condition1={"New"}
              condition2={"Used"}
            />
          </li>
          {plataform ? (
            <li>
              <Checkbox
                title={"Format"}
                condition1={"Physical"}
                condition2={"Digital"}
              />
            </li>
          ) : null}
          <div>
            <li>
              <h3 className="titlePlataform">
                <strong>Platform</strong>
              </h3>
              <RadioButton
                name="PC"
                checked={selectedPlatform === "PC"}
                onChange={() => handlePlatformChange("PC")}
              />
              <RadioButton
                name="Ps5"
                checked={selectedPlatform === "Ps5"}
                onChange={() => handlePlatformChange("Ps5")}
              />
              <RadioButton
                name="Ps4"
                checked={selectedPlatform === "Ps4"}
                onChange={() => handlePlatformChange("Ps4")}
              />
              <RadioButton
                name="Switch"
                checked={selectedPlatform === "Switch"}
                onChange={() => handlePlatformChange("Switch")}
              />
              <RadioButton
                name="Xbox"
                checked={selectedPlatform === "Xbox"}
                onChange={() => handlePlatformChange("Xbox")}
              />
            </li>
          </div>
          <li>
            <h3 className="titlePrice">
              <strong>Price</strong>
            </h3>
            <div className="input-container" id="imputPrice">
              <input
                type="text"
                placeholder="Min Price"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Max Price"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </li>
          {ranking?
          <li>
            <h3 className="titleRanking">
              <strong>Ranking</strong>
            </h3>
            <RangeDrawer />
          </li>
          :null}
        </ul>
      </div>
    </>
  );
}

export default Drawer;
