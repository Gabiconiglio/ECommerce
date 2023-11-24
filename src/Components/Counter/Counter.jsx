import { React} from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "../Counter/Counter.css"

function Counter(props) {

  return (
    <>
      <button
        tabIndex={11}
        className="btn btn-ghost btn-circle" id={props.color}
        onClick={() => {
          props.count > 0 ? props.onCountUpdate(props.count - 1) : null;
        }}
      >
        <AiOutlineMinus />
      </button>

      <button tabIndex={12} className="btn btn-ghost btn-circle" id={props.color}>
        {props.count}
      </button>
      <button
        tabIndex={13}
        className="btn btn-ghost btn-circle"
        id={props.color}
        onClick={() => props.onCountUpdate(props.count + 1) }
      >
        <AiOutlinePlus />
      </button>
    </>
  );
}

export default Counter;
