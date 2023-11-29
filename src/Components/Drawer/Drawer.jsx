import { React, useState,useRef} from "react";
import { useToggle } from "../Context/ToggleContext.jsx";
import Checkbox from "../CheckBox/CheckBox.jsx";
import RangeDrawer from "../Range/Range.jsx";
import RadioButton from "../RadioButton/RadioButton.jsx";
import "../Drawer/Drawer.css";

function Drawer({ plat, rank, filter }) {
  const { isChecked } = useToggle();
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedConditions, setselectedConditions] = useState("");
  const plataform = plat;
  const ranking = rank;
  const minPriceRef = useRef(0);
  const maxPriceRef = useRef(0);

  const min= minPriceRef.current.value;
  const max= maxPriceRef.current.value;


  const handlePlatformChange = (platform) => {
    setSelectedPlatform(platform);
  };

  const handleConditionsChange = (condition) => {
    setselectedConditions(condition);
  };

  const handleChangeFilters = () => {
    filter({ console: selectedPlatform, conditions: selectedConditions,minPrice:min,maxPrice:max });
  };

 

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
            <label className={`custom-checkbox ${selectedConditions === 'Used' ? 'selected' : ''}`}>
              <input
                type="checkbox"
                checked={selectedConditions === "New"}
                onChange={() => handleConditionsChange("New")}
              />
              New
            </label>
            <label className={`custom-checkbox ${selectedConditions === 'Used' ? 'selected' : ''}`}>
              <input
                type="checkbox"
                checked={selectedConditions === "Used"}
                onChange={() => handleConditionsChange("Used")}
              />
              Used
            </label>
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
              <RadioButton
                name="All"
                checked={selectedPlatform === ""}
                onChange={() => handlePlatformChange("")}
              />
            </li>
          </div>
          <li>
            <h3 className="titlePrice">
              <strong>Price</strong>
            </h3>
            <div className="input-container" id="imputPrice">
              <input
                ref={minPriceRef}
                type="text"
                placeholder="Min Price"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                ref={maxPriceRef}
                type="text"
                placeholder="Max Price"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </li>
          {ranking ? (
            <li>
              <h3 className="titleRanking">
                <strong>Ranking</strong>
              </h3>
              <RangeDrawer />
            </li>
          ) : null}
        </ul>
        <button
          className="btn btn-outline"
          id="btnDrawer"
          onClick={handleChangeFilters}
        >
          Apply Filter
        </button>
      </div>
    </>
  );
}

export default Drawer;
