import { React, useState, useEffect, useContext } from "react";
import { useProductContext } from "../Components/Context/ProductContext.jsx";
import { Url_Games, api_key } from "../Components/Links/Link.jsx";
import { useFetch } from "../Components/Hook/useFetch.js";
import Loading from "../Components/Loading/Loading.jsx";
import CardsDetail from "../Components/CardsDetail/CardsDetail.jsx";
import "./Css/CartDetail.css";

function CartDetail() {
  const { productStates } = useProductContext();
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const productIds = Object.keys(productStates);

    if (productIds.length > 0) {
      const promises = productIds.map((customKey) => {
        const url = Url_Games + `/${customKey}` + api_key;
        return fetch(url)
          .then((res) => res.json())
          .then((data) => ({ customKey, data }))
          .catch((error) => {
            console.error("Error fetching product data:", error);
            return { customKey, data: null };
          });
      });

      Promise.all(promises)
        .then((productData) => {
          setProductData(productData);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
          setIsLoading(false);
        });
    }
  }, [productStates]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 200000);

    return () => clearTimeout(timeout);
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
          {productData.map((item, index) => (
            <div key={item.customKey} className="product-card">
              <CardsDetail
                background_image={item.data.background_image}
                name={item.data.name}
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
