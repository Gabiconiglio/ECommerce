import React from "react";
import "../RadioButton/RadioButton.css";

function RadioButton(props) {
  return (
    <div className="">
      <input
        type="radio"
        checked={props.checked}
        onChange={props.onChange}
        name="radio-1"
        className="radio"
      />
      <h3 className="titleRadioButton">{props.name}</h3>
    </div>
  );
}

export default RadioButton;
