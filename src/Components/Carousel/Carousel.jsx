import { Link } from "react-router-dom";
import { useToggle } from "../Hook/ToggleContext";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import BanNav from "../Imagines/BanNav.jpg";
import GamesCar from "../Imagines/GamesCar.jpg";
import NewSalls from "../Imagines/NewSalls.jpg";
import Servicio from "../Imagines/Servicio.jpg";
import "../Carousel/Carousel.css";

function Carousel() {
  const { isChecked, setIsChecked } = useToggle();

  return (
    <>
      <div className="carousel" id="Carousel">
        <div id="slide1" className="carousel-item relative w-full">
          <Link
            to={"/Productos/Games"}
            className="carousel-item relative w-full"
          >
            <img src={BanNav} className="ImageCarousel" />
          </Link>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              tabIndex={18}
              href="#slide4"
              className={`btn btn-circle ${
                isChecked ? "border-base-400" : "border-warning"
              }`}
              id="BtnCarousel"
              data-theme={isChecked ? "light" : "dark"}
            >
              <GrFormPreviousLink id="prevCar" />
            </a>
            <a
              tabIndex={19}
              href="#slide2"
              className={`btn btn-circle ${
                isChecked ? "border-base-400" : "border-warning"
              }`}
              id="BtnCarousel"
              data-theme={isChecked ? "light" : "dark"}
            >
              <GrFormNextLink id="nextCar" />
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Link
            to={"/Productos/Console"}
            className="carousel-item relative w-full"
          >
            <img src={NewSalls} className="ImageCarousel" />
          </Link>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              tabIndex={21}
              href="#slide1"
              className={`btn btn-circle ${
                isChecked ? "border-base-400" : "border-warning"
              }`}
              id="BtnCarousel"
              data-theme={isChecked ? "light" : "dark"}
            >
              <GrFormPreviousLink id="prevCar" />
            </a>
            <a
              tabIndex={22}
              href="#slide3"
              className={`btn btn-circle ${
                isChecked ? "border-base-400" : "border-warning"
              }`}
              id="BtnCarousel"
              data-theme={isChecked ? "light" : "dark"}
            >
              <GrFormNextLink id="nextCar" />
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Link
            to={"/Productos/Games"}
            className="carousel-item relative w-full"
          >
            <img src={GamesCar} className="ImageCarousel" />
          </Link>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              tabIndex={23}
              href="#slide2"
              className={`btn btn-circle ${
                isChecked ? "border-base-400" : "border-warning"
              }`}
              id="BtnCarousel"
              data-theme={isChecked ? "light" : "dark"}
            >
              <GrFormPreviousLink id="prevCar" />
            </a>
            <a
              tabIndex={24}
              href="#slide4"
              className={`btn btn-circle ${
                isChecked ? "border-base-400" : "border-warning"
              }`}
              id="BtnCarousel"
              data-theme={isChecked ? "light" : "dark"}
            >
              <GrFormNextLink id="nextCar" />
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Link
            to={"/Productos/TechnicalService"}
            className="carousel-item relative w-full"
          >
            <img src={Servicio} className="ImageCarousel" />
          </Link>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              tabIndex={25}
              href="#slide3"
              className={`btn btn-circle ${
                isChecked ? "border-base-400" : "border-warning"
              }`}
              id="BtnCarousel"
              data-theme={isChecked ? "light" : "dark"}
            >
              <GrFormPreviousLink id="prevCar" />
            </a>
            <a
              tabIndex={26}
              href="#slide1"
              className={`btn btn-circle ${
                isChecked ? "border-base-400" : "border-warning"
              }`}
              id="BtnCarousel"
              data-theme={isChecked ? "light" : "dark"}
            >
              <GrFormNextLink id="nextCar" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Carousel;
