import { React, useState, useEffect } from "react";
import { useProductContext } from "../Components/Context/ProductContext.jsx";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  connectFirestoreEmulator,
} from "firebase/firestore";
import Loading from "../Components/Loading/Loading.jsx";
import CardsDetail from "../Components/CardsDetail/CardsDetail.jsx";
import "./Css/CartDetail.css";

function CartDetail() {
  const { productStates } = useProductContext();
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


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
            CantItem:cantItem,
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
      const promises = storedItems.map((item) => fetchDataForProduct(item.id, item.CantItem));
      Promise.all(promises)
        .then((resolvedItems) => {
          const itemsArray = resolvedItems.filter(Boolean).flat();
          setProductData(itemsArray);
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

  return (
    <div>
      <h3 id="textCartDetail">Cart Detail</h3>
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
              />
            </div>
          ))}
        </div>
      )}
      <div className="details-column">
        <h3 id="titleCartDetail">Purchase Detail</h3>
        <div className="subtotal">
          <span>Subtotal: $X.XX</span>
          <button className="btn btn-outline">Confirmar Compra</button>
        </div>
      </div>
    </div>
  );
}

export default CartDetail;
