import { React, useState, useEffect, useCallback, useRef } from "react";
import { useProductContext } from "../Components/Context/ProductContext.jsx";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc
} from "firebase/firestore";
import { useToggle } from "../Components/Context/ToggleContext.jsx";
import { CiGift } from "react-icons/ci";
import Loading from "../Components/Loading/Loading.jsx";
import CardsDetail from "../Components/CardsDetail/CardsDetail.jsx";
import "./Css/CartDetail.css";

function CartDetail() {
  const { productStates } = useProductContext();
  const { isChecked } = useToggle();
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState(true);
  const [btnEmpty, setbtnEmpty] = useState(false);
  const userNameRef = useRef(null);
  const userEmailRef = useRef(null);

  const removeItem = useCallback(
    (idProduct) => {
      const filteredCart = productData.filter((item) => item.key !== idProduct);
      setProductData(filteredCart);
      localStorage.setItem("items", JSON.stringify(filteredCart));
      alert(`the product ${idProduct} was deleted correctly `);
    },
    [productData]
  );

  const removeAllItem = useCallback(() => {
    setProductData([]);
    localStorage.setItem("items", JSON.stringify([]));
    alert("Cart was deleted correctly!!");
    setText(true);
    setbtnEmpty(false);
  }, [productData]);

  useEffect(() => {
    const fetchDataForProduct = async (id, cantItem) => {
      const db = getFirestore();
      const itemsRef = collection(db, "Games");
      const queryFilter = query(itemsRef, where("key", "==", id));

      try {
        const res = await getDocs(queryFilter);

        if (res.size === 0) {
          console.log("No results for custom key:", id);
        } else {
          const itemsArray = res.docs.map((doc) => ({
            id: doc.id,
            CantItem: cantItem,
            ...doc.data(),
          }));
          return itemsArray;
        }
      } catch (error) {
        console.error("Error fetching data for custom key:", id, error);
        throw error;
      }
    };

    const storedItems = JSON.parse(localStorage.getItem("items")) || [];

    if (storedItems.length > 0) {
      const promises = storedItems.map((item) =>
        fetchDataForProduct(item.key, item.CantItem)
      );
      Promise.all(promises)
        .then((resolvedItems) => {
          const itemsArray = resolvedItems.filter(Boolean).flat();
          setProductData(itemsArray);
          setText(false);
          setbtnEmpty(true);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);
  const total = productData.reduce((acc, item) => acc + item.price * item.CantItem, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const db = getFirestore();

    const collectionRef = collection(db, "orders");

    const order = {
      userName: userNameRef.current.value,
      userEmail: userEmailRef.current.value,
      items: productData,
      totalPrice: total,
    };

    addDoc(collectionRef, order).then((res) =>
      alert(`The order has been sent successfully, your order number is: ${res.id}`)
    );
  };

  return (
    <div>
      <h3 id="textCartDetail">Cart Detail</h3>
      {text ? (
        <p id="textEmptycart" className="join">
          <CiGift id="Gift" />I do not add any products to the shopping cart!!
        </p>
      ) : null}
      {isLoading ? (
        <div className="loadingCartDetail">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-wrap" id="CardProducto">
          {productData.map((item) => (
            <div key={item.id} className="product-card">
              <CardsDetail
                key={item.id}
                background_image={item.background_image}
                name={item.name}
                price={item.price}
                count={item.CantItem}
                customKey={item.id}
                removeItem={() => removeItem(item.key)}
              />
            </div>
          ))}
        </div>
      )}
      {btnEmpty ? (
        <>
          <div id="separator"></div>
          <button
            className={
              isChecked ? "btn btn-outline" : "btn btn-active btn-neutral"
            }
            onClick={() => removeAllItem()}
            id="btnEmptyCart"
          >
            Empty shopping cart
          </button>
          <div id="invoiceDetail">
            <h3 id="titleCartDetail">Purchase Detail</h3>
            <form onSubmit={handleSubmit}>
              <p id="subtotalCart">
                <strong>Subtotal: $</strong> {total}
              </p>
              <div className="join" id="inputForm">
                <input
                  ref={userNameRef}
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered input-sm w-full max-w-xs"
                  id="infoForm"
                  required
                />
                <input
                  ref={userEmailRef}
                  type="email"
                  placeholder="Enter your E-mail"
                  className="input input-bordered input-sm w-full max-w-xs"
                  id="infoForm"
                  required
                />
              </div>
              <div id="btnBuyCartDetailDiv">
                <button
                  className={
                    isChecked ? "btn btn-outline" : "btn btn-active btn-neutral"
                  }
                  type="submit"
                  id="btnBuyCartDetail"
                >
                  Buy Now
                </button>
              </div>
            </form>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default CartDetail;
