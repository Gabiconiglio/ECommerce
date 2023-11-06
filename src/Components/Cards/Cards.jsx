import { React, useState } from "react";
import { useToggle } from "../Hook/ToggleContext";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Counter from "../Counter/Counter.jsx";
import ModalDetail from "../ModalDetail/ModalDetail.jsx";
import "../Cards/Cards.css";

function Cards(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isChecked } = useToggle();

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      document.getElementById("my_modal_2").showModal();
    }, 0);
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
          <div className="join">
            <h2 className="card-title">{props.name}</h2>
            <form method="dialog">
              <button
                className="btn btn-ghost btn-circle"
                id="circleInfo"
                onClick={openModal}
              >
                <AiOutlineInfoCircle id="iconoModalInfo" />
              </button>
            </form>
          </div>
          <div className="textoCard">
            <div>
              <p>
                {" "}
                <strong>Platform:</strong> {props.console}
              </p>
              <p>
                <strong>Format:</strong> {props.format}
              </p>
            </div>
            <div>
              <p>
                <strong>Conditions:</strong> {props.conditions}
              </p>
              <p>
                <strong>Price:</strong> ${props.price}
              </p>
            </div>
          </div>
          <div className="card-actions justify-center">
            <div>
              <div className="join">
                <Counter />
              </div>
            </div>
            <button className="btn btn-outline">Buy Now</button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ModalDetail
          closeModal={() => setIsModalOpen(false)}
          name={props.name}
          released={props.released}
          image={props.background_image}
          genres={props.genres}
          Platform={props.console}
          Rank={props.Rank}
          customKey={props.customKey}
        />
      )}
    </>
  );
}

export default Cards;
