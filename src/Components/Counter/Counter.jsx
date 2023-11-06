import { React} from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {useCounter} from "../Hook/useCounter.js"
function Counter() {

  const [counter,handleAddUnit,handleSubtractUnit]=useCounter(0)

  return (
    <>
      <button className="btn btn-ghost btn-circle" onClick={handleSubtractUnit}>
        <AiOutlineMinus />
      </button>
      <button className="btn btn-ghost btn-circle">{counter}</button>
      <button className="btn btn-ghost btn-circle" onClick={handleAddUnit}>
        <AiOutlinePlus />
      </button>
    </>
  );
}

export default Counter;
