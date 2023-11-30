import { React, useContext } from "react";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { CounterContext } from "../Context/CounterContext.jsx";
import { useToggle } from "../Context/ToggleContext.jsx";

export const useCartFunctions = () => {
  const { isChecked } = useToggle();
  const { items, setItems } = useContext(CounterContext);
  const [productData, setProductData] = useState([]);
  const [Total, setTotal] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState(true);
  const [btnEmpty, setbtnEmpty] = useState(false);
  const userNameRef = useRef(null);
  const userEmailRef = useRef(null);

  const UpdateInfo = useCallback((prevProductData) => {
    const existingItemsJSON = localStorage.getItem("items");
    const existingItems = existingItemsJSON
      ? JSON.parse(existingItemsJSON)
      : [];

    const updatedProductData = existingItems.map((item) => {
      const existingItemIndex = prevProductData.findIndex(
        (product) => product.key === item.key
      );

      if (existingItemIndex !== -1) {
        return {
          ...prevProductData[existingItemIndex],
          CantItem: item.CantItem,
        };
      }

      return {
        key: item.key,
        CantItem: item.CantItem,
        ...doc.data(),
      };
    });

    const updatedTotal = updatedProductData.reduce(
      (acc, item) => acc + item.price * item.CantItem,
      0
    );

    return {
      productData: updatedProductData,
      total: updatedTotal,
    };
  }, []);

  const removeItem = useCallback(
    (idProduct) => {
      const filteredCart = productData.filter((item) => item.key !== idProduct);
      setProductData(filteredCart);
      const cantItemUpd = filteredCart.reduce(
        (acc, item) => acc + item.CantItem,
        0
      );
      setItems(cantItemUpd);
      localStorage.setItem("items", JSON.stringify(filteredCart));
      alert(`the product ${idProduct} was deleted correctly `);
    },
    [productData]
  );

  const removeAllItem = useCallback(() => {
    setProductData([]);
    localStorage.setItem("items", JSON.stringify([]));
    localStorage.setItem("cartItems", JSON.stringify(0));
    alert("Cart was deleted correctly!!");
    setItems(0);
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
          setProductData(itemsArray);
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

  useEffect(() => {
    if (productData.length > 0) {
      const total2 = productData.reduce(
        (acc, item) => acc + item.price * item.CantItem,
        0
      );
      setTotal(total2);
    }
  }, [productData]);

  return {
    isChecked,
    productData,
    Total,
    isLoading,
    text,
    btnEmpty,
    userNameRef,
    userEmailRef,
    UpdateInfo,
    removeItem,
    removeAllItem,
    setProductData,
    setTotal,
  };
};
