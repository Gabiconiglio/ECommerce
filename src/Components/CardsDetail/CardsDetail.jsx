import { useState } from "react";
import { useToggle } from "../Context/ToggleContext.jsx";
// import { AiOutlineInfoCircle } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
import ModalDetail from "../ModalDetail/ModalDetail.jsx";
import "../CardsDetail/CardsDetail.css";

function CardsDetail(props) {
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  const { isChecked } = useToggle();
  //   const navigate = useNavigate();

  //   const openModal = () => {
  //     setIsModalOpen(true);
  //     setTimeout(() => {
  //       document.getElementById("my_modal_2").showModal();
  //     }, 0);
  //     navigate(`/Productos/Games/${props.customKey}`);
  //   };

  //   const closeAndRestoreRoute = () => {
  //     setIsModalOpen(false);
  //     navigate("/CartDetail");
  //   };

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
        </div>
      </div>
      {/* {isModalOpen && (
        <ModalDetail
          closeModal={closeAndRestoreRoute}
          Platform={props.console}
          customKey={props.customKey}
          price={props.price}
        />
      )} */}
    </>
  );
}

export default CardsDetail;
