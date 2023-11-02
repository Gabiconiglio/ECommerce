import { React, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
function Counter() {
  const [units, setUnits] = useState(0);

  const handleAddUnit = () => {
    setUnits(units + 1);
  };

  const handleSubtractUnit = () => {
    if (units > 0) {
      setUnits(units - 1);
    }
  };

  return (
    <>
      <button className="btn btn-ghost btn-circle" onClick={handleSubtractUnit}>
        <AiOutlineMinus />
      </button>
      <button className="btn btn-ghost btn-circle">{units}</button>
      <button className="btn btn-ghost btn-circle" onClick={handleAddUnit}>
        <AiOutlinePlus />
      </button>
    </>
  );
}

export default Counter;
