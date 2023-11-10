import { useToggle } from "../Context/ToggleContext";
import { AiFillGithub,AiOutlineLinkedin } from "react-icons/ai";
import Rayos from "../Imagines/Rayos.png";
import "../Footer/Footer.css";

function Footer() {
  const { isChecked } = useToggle();

  return (
    <>
      <footer
        className={`footer bg-base-100 rounded-xl border p-2 ${
          isChecked ? "border-base-400" : "border-warning"
        }`}
        id="Footer"
        data-theme={isChecked ? "light" : "dark"}
      >
        <aside className="items-center grid-flow-col">
          <img src={Rayos} alt="Pelispedia" id="iconoFooter" />
          <p id="textoFooter">Copyright © 2023 - All rights reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <button
            tabIndex={31}
            className="btn btn-ghost btn-circle"
            id="Btnfot1"
            onClick={() => window.open("https://github.com/Gabiconiglio/ECommerce", "_blank")}
          >
            <AiFillGithub id="BtnfotIconos" />
          </button>
          <button
            tabIndex={32}
            className="btn btn-ghost btn-circle"
            id="Btnfot1"
            onClick={() => window.open("https://www.linkedin.com/in/gabriel-eduardo-coniglio/", "_blank")}
          >
            <AiOutlineLinkedin id="BtnfotIconos" />
          </button>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
