import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const useFetchDrawer = (collectionName, condition, category, filters) => {
  const [ItemCard, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const itemsRef = collection(db, collectionName);

      let queryFilter = query(itemsRef, where(condition, "==", category));

      if (filters) {
        if (filters.conditions) {
          queryFilter = query(
            queryFilter,
            where("conditions", "==", filters.conditions)
          );
        }

        if (filters.format) {
          queryFilter = query(
            queryFilter,
            where("format", "==", filters.format)
          );
        }

        if (filters.console) {
          queryFilter = query(
            queryFilter,
            where("console", "==", filters.console)
          );
        }

        if (filters.minPrice && filters.maxPrice) {
          queryFilter = query(
            queryFilter,
            where("price", ">=", parseInt(filters.minPrice)),
            where("price", "<=", parseInt(filters.maxPrice))
          );
        }
      }

      try {
        const res = await getDocs(queryFilter);

        if (res.size === 0) {
          console.log("No results");
          alert("There are no results for this search.");
        } else {
          setItems(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName, category, filters]);

  return { ItemCard, loading };
};

export default useFetchDrawer;
