import { useState } from "react";
import { useToggle } from "../Context/ToggleContext.jsx";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import ModalDetail from "../ModalDetail/ModalDetail.jsx";
import "../Cards/Cards.css";

function Cards(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [url, setUrl] = useState("");
  const { isChecked } = useToggle();
  const navigate = useNavigate();
  const Screen = props.cond;
  const query = props.query;

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      document.getElementById("my_modal_2").showModal();
    }, 0);
    if (Screen === "Home") {
      navigate(`/Detail/${props.customKey}`);
      setUrl(`/Detail/${props.customKey}`);
    } else {
      if (Screen === "Search") {
        navigate(`/Search/${query}/Detail/${props.customKey}`);
        setUrl(`/Search/${query}/Detail/${props.customKey}`);
      } else {
        navigate(`/Productos/${props.category}/Detail/${props.customKey}`);
        setUrl(`/Productos/${props.category}/Detail/${props.customKey}`);
      }
    }
  };

  const closeAndRestoreRoute = () => {
    setIsModalOpen(false);
    if (Screen == "Home") {
      navigate("/");
    } else {
      if (Screen === "Search") {
        navigate(`/Search/${query}`);
      } else {
        navigate(`/Productos/${props.category}`);
      }
    }
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
                {" "}
                <strong>Platform:</strong>
                <br /> {props.console}
              </p>
              {props.format ? (
                <p>
                  <strong>Format:</strong>
                  <br /> {props.format}
                </p>
              ) : null}
            </div>
            <div>
              <p>
                <strong>Conditions:</strong>
                <br /> {props.conditions}
              </p>
              <p>
                <strong>Price:</strong>
                <br /> ${props.price}
              </p>
            </div>
          </div>
          <form method="dialog">
            <button
              tabIndex={28}
              className="btn btn-ghost btn-circle"
              id="circleInfo1"
              onClick={openModal}
            >
              <Link to={url}>
                <AiOutlineInfoCircle id="iconoModalInfo" />
              </Link>
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

export default Cards;
