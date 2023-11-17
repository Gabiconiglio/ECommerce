import { useState } from "react";
import { useToggle } from "../Context/ToggleContext.jsx";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ModalDetail from "../ModalDetail/ModalDetail.jsx";
import "../Cards/Cards.css";

function CardsConsole(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isChecked } = useToggle();
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      document.getElementById("my_modal_2").showModal();
    }, 0);
    navigate(`/Productos/${props.category}/${props.customKey}`);
  };

  const closeAndRestoreRoute = () => {
    setIsModalOpen(false);
    navigate(`/Productos/${props.category}`);
  };

  return (
    <>
      <div
        className={`card card-compact w-105 h-105 bg-base-100 shadow-xl ${
          isChecked ? "border-base-400" : "border-warning"
        }`}
        id="cardsPrincipal"
        data-theme={isChecked ? "light" : "dark"}
      >
        <figure>
          <img src={props.background_image} alt="Shoes" id="imageCards" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <div className="textoCard">
            <div>
              <p>
                <strong>Conditions:</strong><br/> {props.conditions}
              </p>
              <p>
                <strong>Price:</strong><br/> ${props.price}
              </p>
            </div>
          </div>
          <form method="dialog">
            <button
              tabIndex={28}
              className="btn btn-ghost btn-circle"
              id="circleInfo"
              onClick={openModal}
            >
              <AiOutlineInfoCircle id="iconoModalInfo" />
            </button>
          </form>
        </div>
      </div>
      {isModalOpen && (
        <ModalDetail
          closeModal={closeAndRestoreRoute}
          customKey={props.customKey}
          price={props.price}
        />
      )}
    </>
  );
}

export default CardsConsole;
