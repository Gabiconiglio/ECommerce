import { React, useState, Context } from "react";
import { useToggle } from "../Context/ToggleContext.jsx";
import { useProductContext } from "../Context/ProductContext.jsx";
import { FaRegTrashCan } from "react-icons/fa6";
import Counter from "../Counter/Counter.jsx";
import "../CardsDetail/CardsDetail.css";

function CardsDetail(props) {
  const { isChecked } = useToggle();
  const { productStates, updateProductState } = useProductContext();
  const textClass = isChecked ? "text-light" : "text-dark";
  const [count, setCount] = useState(props.count);

  const handleCountUpdate = (newCount) => {
    setCount(newCount);
    updateProductState(props.customKey, newCount, props.price);

    const existingItemsJSON = localStorage.getItem("items");
    const existingItems = existingItemsJSON
      ? JSON.parse(existingItemsJSON)
      : [];

    const existingItemIndex = existingItems.findIndex(
      (item) => item.key === props.customKey
    );

    if (existingItemIndex !== -1) {
      existingItems[existingItemIndex].CantItem = newCount;
      localStorage.setItem("items", JSON.stringify(existingItems));
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
          <img src={props.background_image} alt="Shoes" id="imageCardsDetail" />
        </figure>
        <div className="card-body">
          <h3 className="card-titleCart">{props.name}</h3>
          <h3 className="card-priceCart">
            <strong>Price: $</strong>
            {props.price}
          </h3>
          <div className="card-actions justify-center">
            <div>
              <div className="join">
                <Counter
                  color={`${textClass}`}
                  count={count}
                  onCountUpdate={handleCountUpdate}
                />
              </div>
            </div>
          </div>
          <button
            onClick={props.removeItem}
            className="btn btn-ghost btn-circle"
            id="trash"
          >
            <FaRegTrashCan id="iconTrash" />
          </button>
        </div>
      </div>
    </>
  );
}

export default CardsDetail;
