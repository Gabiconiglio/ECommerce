import { React, useState, useEffect, useContext } from "react";
import { useProductContext } from "../Components/Context/ProductContext.jsx";
import {getFirestore,collection,query, where,getDocs,} from "firebase/firestore";
import Loading from "../Components/Loading/Loading.jsx";
import CardsDetail from "../Components/CardsDetail/CardsDetail.jsx";
import "./Css/CartDetail.css";

function CartDetail() {
  const { productStates } = useProductContext();
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataForProduct = async (customKey) => {
      const db = getFirestore();
      const itemsRef = collection(db, "Games");
      const queryFilter = query(itemsRef, where("key", "==", customKey));

      try {
        const res = await getDocs(queryFilter);
       

        if (res.size === 0) {
          console.log("No results for custom key:", customKey);
        } else {
          const itemsArray = res.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          return itemsArray;
        }
      } catch (error) {
        console.error("Error fetching data for custom key:", customKey, error);
        throw error;
      }
    };

    const productIds = Object.keys(productStates);
   
    if (productIds.length > 0) {
      const promises = productIds.map((customKey) =>
        fetchDataForProduct(customKey)
      );
      Promise.all(promises)
        .then((resolvedItems) => {
     
          const itemsArray = resolvedItems.flat();
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
  }, [productStates]);

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
              />
            </div>
          ))}
          <div className="details-column">
            <h4>Detalle de la Compra</h4>
            <div className="subtotal">
              <span>Subtotal: $X.XX</span>
              <button className="btn btn-outline">Confirmar Compra</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartDetail;
