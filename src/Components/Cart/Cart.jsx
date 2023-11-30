import { React, useContext, useEffect, useState } from "react";
import { useCartFunctions } from "../Hook/CartFunctions.js";
import { Link } from "react-router-dom";
import { CounterContext } from "../Context/CounterContext.jsx";
import { useProductContext } from "../Context/ProductContext.jsx";
import "../Cart/Cart.css";

function Cart() {
  const { productData } = useCartFunctions();
  const { items } = useContext(CounterContext);
  const { productStates } = useProductContext();
  const [subtotalCart, setsubtotalCart] = useState("");

  useEffect(() => {
    let subtotal = 0;

    for (const customKey in productStates) {
      const productData = productStates[customKey];
      const productCount = productData.count;
      const productPrice = productData.price;

      if (productCount && productPrice) {
        const productSubtotal = productCount * productPrice;
        subtotal += productSubtotal;
      }
    }

    setsubtotalCart(subtotal);
  }, [productStates]);

  return (
    <>
      <div
        tabIndex={0}
        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold text-lg">{items} Items</span>
          <span className="text-info">Subtotal: ${subtotalCart}</span>
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
