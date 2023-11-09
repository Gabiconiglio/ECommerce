import React from "react"; 
import { FiSun } from "react-icons/fi"; 
import { BiMoon } from "react-icons/bi"; 
import { Link } from "react-router-dom";
import { useToggle } from "../Hook/ToggleContext";
import Cart from "../Cart/Cart";
import Rayos from "../Imagines/Rayos.png";
import Search from "../Search/Search";
import Login from "../Login/Login";
import Bell from "../Bell/Bell";
import "./Navbar.css";



function Navbar() {
  const { isChecked, setIsChecked } = useToggle();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <>
      <div
        className={`navbar bg-base-100 rounded-xl border p-2 ${
          isChecked ? "border-base-400" : "border-warning"
        }`}
        id="Navbar"
        data-theme={isChecked ? "light" : "dark"}
      >
        <div className="navbar-start">
          <div className="dropdown" id="drop">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={30}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              
            >
              <Link to={"/"}>
                <li>
                  <p id="textoDropHome">Homepage</p>
                </li>
              </Link>
              <Link to={"/Productos"}>
                <li>
                  <p id="textoDropHome">Products</p>
                </li>
              </Link>
              <Link to={"/About"}>
                <li>
                  <p id="textoDropHome">About</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="navbar-center" id="logo">
          <Link to={"/"}>
            <div
              className={`btn btn-ghost normal-case text-xl ${
                isChecked ? "dark" : "light"
              }`}
              id="NombreTitulo"
            >
              <img src={Rayos} alt="Pelispedia" id="icono" />
              OlympusGG
            </div>
          </Link>
        </div>
        <div className="navbar-end" id="ladoIzq">
          {isChecked ? <FiSun id="iconoToggle" /> : <BiMoon id="iconoToggle"/>}
          <div>
            <input
              type="checkbox"
              className="toggle"
              checked={isChecked}
              onChange={handleCheckboxChange}
              id="toggle"
            />
          </div>
          <Search />
          <div className="flex-none" id="carrito">
            <div className="dropdown dropdown-end">
              <label tabIndex={1} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <Cart/>
            </div>
            <Bell/>
          </div>
          <Login />
        </div>
      </div>
    </>
  );
}

export default Navbar;

