import { React, useState, useContext } from "react";
import { CounterContext } from "../Context/CounterContext.jsx";
import { VscBellDot, VscBell } from "react-icons/vsc";
import "../Bell/Bell.css";

function Bell() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useContext(CounterContext);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        tabIndex={3}
        className="btn btn-ghost btn-circle"
        onClick={handleButtonClick}
      >
        <div className="indicator">
          {items === 0 ? (
            <VscBell id="iconBell" />
          ) : (
            <VscBellDot id="iconBell" />
          )}
        </div>
      </button>
      {isMenuOpen && (
        <div className="alert" id="alertBell">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>{`Confirmed products: ${items}`}</span>
        </div>
      )}
    </>
  );
}

export default Bell;
