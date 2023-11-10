import { Link } from "react-router-dom";
import Bowser from "../Components/Imagines/Bowser.jpg";
import Marioicon from "../Components/Imagines/Marioicon.png";
import "../Screens/Css/Notfound404.css";

function Notfound404() {
  return (
    <>
      <p id="txt1Notfound">You chose the wrong path to save the princess!!</p>
      <img src={Bowser} className="imageNotfound" />
      <Link to={"/"}>
        <button className="btn btn-outline" id="btnNot">
          <img src={Marioicon} className="iconNot" />
          Go Home
        </button>
      </Link>
      <p id="txt2Notfound">
        If you want to save yourself from Bowser's attack, use the button that
        will take you to the castle.
      </p>
    </>
  );
}

export default Notfound404;
