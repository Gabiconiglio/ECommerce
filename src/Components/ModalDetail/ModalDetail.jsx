import React, { useEffect, useState } from "react";
import { useFetchDep } from "../Hook/useFetchDep.js";
import { Url_Games, api_key } from "../Links/Link.jsx";
import { useToggle } from "../Hook/ToggleContext";
import { useLocalStorage } from "../Hook/useLocalstorage.js";
import AlertConfirm from "../Alert/AlertConfirm.jsx"
import Alert from "../Alert/Alert.jsx"
import Counter from "../Counter/Counter.jsx";
import Rating from "../Rating/Rating.jsx";
import Loading from "../Loading/Loading.jsx";
import "../ModalDetail/ModalDetail.css";

function ModalDetail({ closeModal, Platform, customKey, price }) {
  const url = Url_Games + `/${customKey}` + api_key;
  const { isChecked } = useToggle();
  const [isLoading, setIsLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [count, setCount] = useState(0);
  const [savedCount, setSavedCount] = useLocalStorage(`count-${customKey}`, 0);
  const [savedPrice, setSavedPrice] = useLocalStorage(`price-${customKey}`, price);
  
  const textClass = isChecked ? "text-light" : "text-dark";

  const handleBuyNow = () => {
    if(count>0){
    setSavedPrice(price);
    setSavedCount(count);
    setShowAlert(true);
  }
  else
  {
    setShowAlert2(true);
  }
  };

  setTimeout(() => {
    setShowAlert(false);
  }, 4000);

  setTimeout(() => {
    setShowAlert2(false);
  }, 3000);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timeout);
  }, []);

  const [data] = useFetchDep(url, customKey);
  return (
    <dialog
      id="my_modal_2"
      className="modal"
      data-theme={isChecked ? "light" : "dark"}
    >
      <div className="modal-box" id="modalBox">
        <>
          {isLoading ? <Loading color={`${textClass}`} /> : null}
          <img src={data.background_image} alt="Games" id="" />
          <h3 className={`font-bold text-lg ${textClass}`} id="textModalDetail">
            {data.name}
          </h3>
          <div className={`py-4 ${textClass}`} id="InfoDetail">
            <p>
              <strong>Id:</strong>
              {data.id}
            </p>
            <p>
              <strong>Description:</strong>{" "}
              {data.description_raw
                ? data.description_raw.split(".")[1] + "."
                : "No description available"}
            </p>
            <p>
              <strong>Release Date:</strong>{" "}
              {new Date(data.released).toLocaleDateString("es-ES")}
            </p>
            <p>
              <strong>Genres:</strong>{" "}
              {data.genres && data.genres.length > 0 ? (
                <>
                  {data.genres[0].name}
                  {data.genres.length > 1 && ` / ${data.genres[1].name}`}
                </>
              ) : (
                "No genres available"
              )}
            </p>
            <p>
              <strong>Platform:</strong> {Platform}
            </p>
            <p>
              <strong>Price: $</strong>
              {price}
            </p>
          </div>
          <Rating Rank={data.rating} color={`${textClass}`} />
          <div className="counteBuy">
            <div className="card-actions justify-center">
              <div>
                <div className="join">
                  <Counter color={`${textClass}`} count={count} onCountUpdate={setCount} />
                </div>
              </div>
              <button className="btn btn-outline" onClick={handleBuyNow}>
                Buy Now
              </button>
              {showAlert && <AlertConfirm text={`You bought ${count} products`} />}
              {showAlert2 && <Alert text={"You can only buy if you add the quantity of the product"}/>}
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button
                tabIndex={6}
                className="btn btn-outline"
                id="btnCloseModal"
                onClick={closeModal}
              >
                Close
              </button>
            </form>
          </div>
        </>
      </div>
    </dialog>
  );
}

export default ModalDetail;
