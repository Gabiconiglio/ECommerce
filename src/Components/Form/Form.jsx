import { useToggle } from "../Context/ToggleContext.jsx";
import "../Form/Form.css";

function Form(props) {
  const { isChecked } = useToggle();

  return (
    <form onSubmit={props.handleSubmit}>
      <p id="subtotalCart">
        <strong>Subtotal: $</strong> {props.Total}
      </p>
      <div className="join" id="inputForm">
        <input
          ref={props.userNameRef}
          type="text"
          placeholder="Enter your full name"
          className="input input-bordered input-sm w-full max-w-xs"
          id="infoForm1"
          required
        />
        <input
          ref={props.userEmailRef}
          type="email"
          placeholder="Enter your E-mail"
          className="input input-bordered input-sm w-full max-w-xs"
          id="infoForm2"
          required
        />
      </div>
      <div id="btnBuyCartDetailDiv">
        <button
          className={
            isChecked ? "btn btn-outline" : "btn btn-active btn-neutral"
          }
          type="submit"
          id="btnBuyCartDetail"
        >
          Buy Now
        </button>
      </div>
    </form>
  );
}

export default Form;
