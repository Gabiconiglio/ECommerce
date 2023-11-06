import React, { useState } from "react";
import "../CheckBox/CheckBox.css";

function Checkbox(props) {
  const [isChecked1, setIsChecked1] = useState(false); 
  const [isChecked2, setIsChecked2] = useState(false); 

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1); 
  };
  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2); 
  };

  return (
    <>
      <h3 className="titleConditionsDrawer">{props.title}</h3>
      <div>
        <input
          type="checkbox"
          checked={isChecked1} 
          className="checkbox"
          onChange={handleCheckboxChange1} 
          id="check"
        />
        <a>{props.condition1}</a>
      </div>
      <div>
        <input
          type="checkbox"
          checked={isChecked2} 
          className="checkbox"
          onChange={handleCheckboxChange2}
          id="check"
        />
        <a>{props.condition2}</a>
      </div>
    </>
  );
}

export default Checkbox;
