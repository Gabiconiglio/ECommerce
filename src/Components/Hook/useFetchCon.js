import { useEffect, useState } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const UseFirestoreDataSearch = (collectionName,condition,category) => {
  const [ItemCard, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const itemsRef = collection(db, collectionName);
      const queryFilter = query(itemsRef,where(condition, '==', category));

      try {
        const res = await getDocs(queryFilter);

        if (res.size === 0) {
          console.log('No results');
        } else {
          setItems(res.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName, category]);

  return { ItemCard, loading };
};

export default UseFirestoreDataSearch;