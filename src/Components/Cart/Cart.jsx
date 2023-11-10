import { React, useEffect, useState, useContext } from "react";
import { CounterContext } from "../Context/CounterContext.jsx";
import "../Cart/Cart.css";

function Cart() {
  const { items } = useContext(CounterContext);
  const [cartItems, setCartItems] = useState(items);

  useEffect(() => {
    setCartItems(items);
  }, [items]);


  return (
    <>
      <div
        tabIndex={0}
        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold text-lg">{cartItems} Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button tabIndex={15} className="btn btn-outline">
              View cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;