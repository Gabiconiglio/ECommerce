import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const useFetchSearch = (collectionName, queries) => {
  const [ItemCard, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const itemsRef = collection(db, collectionName);

      let queriesArray = ["name", "console", "maker"];

      const results = await Promise.all(
        queriesArray.map(async (field) => {
          const q = query(itemsRef, where(field, "==", queries));
          const res = await getDocs(q);
          return res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        })
      );

      const combinedResults = results.flat();
      console.log(combinedResults);

      try {
        if (combinedResults.length === 0) {
          console.log("No results");
          alert("There are no results for this search.");
        } else {
          setItems(combinedResults);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName, queries]);

  return { ItemCard, loading };
};

export default useFetchSearch;
