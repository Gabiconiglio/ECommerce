import {useEffect} from "react";
import { getFirestore, getDocs, collection, doc} from 'firebase/firestore'



useEffect(()=> {
    // Acceder a una colección

    const db = getFirestore()

    const itemsRef = collection(db, 'Products')
    const queryFilter = query(itemsRef, orderBy('id', 'asc'), limit(5));

    getDocs(queryFilter)
    .then(res => {
      if(res.size === 0) {
        console.log('No results');
      }
      setItems(res.docs.map(doc => ({id: doc.id, ...doc.data()})))
    })
    
  }, [])