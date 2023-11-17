import React, { useEffect, useState, useContext } from "react";
import { CounterContext } from "../Context/CounterContext.jsx";
import { useToggle } from "../Context/ToggleContext.jsx";
import { useProductContext } from "../Context/ProductContext.jsx";
import UseFirestoreData from "../Hook/useFetchFire.js";
import AlertConfirm from "../Alert/AlertConfirm.jsx";
import Alert from "../Alert/Alert.jsx";
import Counter from "../Counter/Counter.jsx";
import Rating from "../Rating/Rating.jsx";
import Loading from "../Loading/Loading.jsx";
import "../ModalDetail/ModalDetail.css";

function ModalDetail({ closeModal, customKey, price }) {
  const { isChecked } = useToggle();
  const { ItemCard, loading } = UseFirestoreData("Games", "key", customKey);

  const { items, setItems } = useContext(CounterContext);
  const [isLoading, setIsLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const { productStates, updateProductState } = useProductContext();
  const count = productStates[customKey]?.count || 0;
  const productPrice = productStates[customKey]?.price || 0;
  const textClass = isChecked ? "text-light" : "text-dark";
  const localStorageKey = `Item_${customKey}`;

  const handleBuyNow = () => {
    if (count > 0) {
      updateProductState(customKey, count, price);
      setItems((prevItems) => prevItems + count);
      setShowAlert(true);

      const existingItemNewDataJSON = localStorage.getItem(localStorageKey);

      if (existingItemNewDataJSON) {
        const existingItemNewDataInfo = JSON.parse(existingItemNewDataJSON);
        existingItemNewDataInfo.CantItem = count;
        localStorage.setItem(
          localStorageKey,
          JSON.stringify(existingItemNewDataInfo)
        );
      } else {
        const itemData = {
          id: customKey,
          price: price,
          CantItem: count,
        };
        const itemDataJSON = JSON.stringify(itemData);
        localStorage.setItem(localStorageKey, itemDataJSON);
      }
    } else {
      setShowAlert2(true);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [showAlert]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert2(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [showAlert2]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timeout);
  }, []);

  console.log(ItemCard);
  return (
    <dialog
      id="my_modal_2"
      className="modal"
      data-theme={isChecked ? "light" : "dark"}
    >
      <div className="modal-box" id="modalBox">
        <>
          {isLoading ? <Loading color={`${textClass}`} /> : null}
          {ItemCard.length > 0 ? (
            ItemCard.map((gamer) => (
              <>
                <img src={gamer.background_image} alt="Games" id="" />
                <h3
                  className={`font-bold text-lg ${textClass}`}
                  id="textModalDetail"
                >
                  {gamer.name}
                </h3>
                <div className={`py-4 ${textClass}`} id="InfoDetail">
                  <p>
                    <strong>Id:</strong>
                    {gamer.key}
                  </p>
                  <p>
                    <strong>Description:</strong> {gamer.description}
                  </p>
                  <p>
                    <strong>Release Date:</strong>{" "}
                    {new Date(gamer.released).toLocaleDateString("es-ES")}
                  </p>
                  <p>
                    <strong>Genres:</strong>{" "}
                    {gamer.genres && gamer.genres.length > 0 ? (
                      <>
                        {gamer.genres[0]}{" "}
                        {gamer.genres.length > 1 && ` / ${gamer.genres[1]}`}
                      </>
                    ) : (
                      "No genres available"
                    )}
                  </p>
                  <p>
                    <strong>Platform:</strong> {gamer.console}
                  </p>
                  <p>
                    <strong>Price: $</strong>
                    {gamer.price}
                  </p>
                </div>
                <Rating Rank={gamer.rating} color={`${textClass}`} />
              </>
            ))
          ) : (
            <Loading color={`${textClass}`} />
          )}

          <div className="counteBuy">
            <div className="card-actions justify-center">
              <div>
                <div className="join">
                  <Counter
                    color={`${textClass}`}
                    count={count}
                    onCountUpdate={(newCount) =>
                      updateProductState(customKey, newCount)
                    }
                  />
                </div>
              </div>
              <button className="btn btn-outline" onClick={handleBuyNow}>
                Buy Now
              </button>
              {showAlert && (
                <AlertConfirm text={`You bought ${count} products`} />
              )}
              {showAlert2 && (
                <Alert text="You can only buy if you add the quantity of the product" />
              )}
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
