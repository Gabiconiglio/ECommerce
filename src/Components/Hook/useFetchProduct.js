import { useState, useEffect } from "react";
import {getFirestore,getDocs,collection,orderBy,query,limit} from "firebase/firestore";

const useFetchProduct = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const itemsRef = collection(db, "Products");
        const q = query(itemsRef, orderBy("id", "asc"), limit(5));

        const querySnapshot = await getDocs(q);
        if (querySnapshot.size === 0) {
          console.log("No results");
        } else {
          const fetchedItems = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setItems(fetchedItems);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return [items, setItems];
};

export default useFetchProduct;
