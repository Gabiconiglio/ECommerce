import { React, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CounterContext } from "../Context/CounterContext.jsx";
import { useLocalStorage } from "../Hook/useLocalstorage.js"; 
import "../Cart/Cart.css";

function Cart() {
  const { items } = useContext(CounterContext);
  return (
    <>
      <div
        tabIndex={0}
        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold text-lg">{items} Items</span>
          <span className="text-info">Subtotal: $</span>
          <div className="card-actions">
            <Link to={"/CartDetail"}>
              <button tabIndex={15} className="btn btn-outline">
                View cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;