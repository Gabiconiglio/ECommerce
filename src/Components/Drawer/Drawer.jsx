import { React, useState, useRef } from "react";
import { useToggle } from "../Context/ToggleContext.jsx";
import RadioButton from "../RadioButton/RadioButton.jsx";
import "../Drawer/Drawer.css";

function Drawer({ format, plat, filter }) {
  const { isChecked } = useToggle();
  const [selectedFormat, setselectedFormat] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedConditions, setselectedConditions] = useState("");
  const Format = format;
  const plataform = plat;
  const minPriceRef = useRef(0);
  const maxPriceRef = useRef(0);

  const min = minPriceRef.current.value;
  const max = maxPriceRef.current.value;

  const handleFormatChange = (format) => {
    setselectedFormat(format);
  };

  const handlePlatformChange = (platform) => {
    setSelectedPlatform(platform);
  };

  const handleConditionsChange = (condition) => {
    setselectedConditions(condition);
  };

  const handleChangeFilters = () => {
    filter({
      console: selectedPlatform,
      conditions: selectedConditions,
      minPrice: min,
      maxPrice: max,
      format: selectedFormat,
    });
  };

  const handleCleanFilters = () => {
    filter({
      console: "",
      conditions: "",
      minPrice: "",
      maxPrice: "",
      format: "",
    });
    setSelectedPlatform("");
    setselectedFormat("");
    setselectedConditions("");
    minPriceRef.current.value = "";
    maxPriceRef.current.value = "";
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
            <h3 className="tittleConditionDrawer">
              <strong>Conditions</strong>
            </h3>
            <label id="InfoDrawer">
              <input
                type="checkbox"
                checked={selectedConditions === "new"}
                onChange={() => handleConditionsChange("new")}
              />
              New
            </label>
            <label id="InfoDrawer">
              <input
                type="checkbox"
                checked={selectedConditions === "used"}
                onChange={() => handleConditionsChange("used")}
              />
              Used
            </label>
          </li>
          {Format ? (
            <li>
              <h3 className="tittleFormaDrawer">
                <strong>Format</strong>
              </h3>
              <label id="InfoDrawer">
                <input
                  type="checkbox"
                  checked={selectedFormat === "digital"}
                  onChange={() => handleFormatChange("digital")}
                />
                Digital
              </label>
              <label id="InfoDrawer">
                <input
                  type="checkbox"
                  checked={selectedFormat === "physical"}
                  onChange={() => handleFormatChange("physical")}
                />
                Physical
              </label>
            </li>
          ) : null}
          <div>
            <li>
              <h3 className="titlePlataformDrawer">
                <strong>Platform</strong>
              </h3>
              <RadioButton
                name="PC"
                checked={selectedPlatform === "pc"}
                onChange={() => handlePlatformChange("pc")}
                id="InfoDrawer"
              />
              <RadioButton
                name="Ps5"
                checked={selectedPlatform === "ps5"}
                onChange={() => handlePlatformChange("ps5")}
                id="InfoDrawer"
              />
              <RadioButton
                name="Ps4"
                checked={selectedPlatform === "ps4"}
                onChange={() => handlePlatformChange("ps4")}
                id="InfoDrawer"
              />
              <RadioButton
                name="Switch"
                checked={selectedPlatform === "switch"}
                onChange={() => handlePlatformChange("switch")}
                id="InfoDrawer"
              />
              <RadioButton
                name="Xbox"
                checked={selectedPlatform === "xbox"}
                onChange={() => handlePlatformChange("xbox")}
                id="InfoDrawer"
              />
              <RadioButton
                name="All"
                checked={selectedPlatform === ""}
                onChange={() => handlePlatformChange("")}
                id="InfoDrawer"
              />
            </li>
          </div>
          <li>
            <h3 className="titlePriceDrawer">
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
        </ul>
        <div id="BtnsDrawers">
          <button
            className="btn btn-outline"
            id="btnDrawer"
            onClick={handleChangeFilters}
          >
            Apply Filter
          </button>
          <button
            className="btn btn-outline"
            id="btnDrawerClean"
            onClick={handleCleanFilters}
          >
            Clean filters
          </button>
        </div>
      </div>
    </>
  );
}

export default Drawer;
