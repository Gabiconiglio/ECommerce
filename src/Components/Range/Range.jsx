import React, { useState } from "react";
import "../Range/Range.css";

function RangeDrawer() {
  const [rangeState, setRangeState] = useState(0);
  const handleRange = (event) => {
    setRangeState(event.target.value); 
  };

  return (
    <>
      <input
        type="range"
        min={0}
        max={5}
        value={rangeState}
        className="range"
        onChange={handleRange}
      />
      <div className="w-full flex justify-between text-xs px-2" id="numberRange">
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
    </>
  );
}

export default RangeDrawer;
