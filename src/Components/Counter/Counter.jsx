import { React} from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
// import {useCounter} from "../Hook/useCounter.js"
function Counter(props) {

  // const [counter,handleAddUnit,handleSubtractUnit]=useCounter(props.count)

  return (
    <>
      <button className="btn btn-ghost btn-circle" onClick={()=>props.onCountUpdate(props.count-1)}>
        <AiOutlineMinus />
      </button>
      <button className="btn btn-ghost btn-circle">{props.count}</button>
      <button className="btn btn-ghost btn-circle" onClick={()=>props.onCountUpdate(props.count+1)}>
        <AiOutlinePlus />
      </button>
    </>
  );
}

export default Counter;
