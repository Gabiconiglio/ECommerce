import { useState,useEffect } from "react";
import { getFirestore, getDocs, collection, orderBy,doc, getDoc, query, where, limit} from 'firebase/firestore'
import Loading from "../Components/Loading/Loading.jsx";
import Hero from "../Components/Hero/Hero.jsx";
import TxtProducto from "../Components/Imagines/TxtProducto.png";
import "../Screens/Css/Products.css";

function Products() {
  const [items, setItems] = useState({})

  useEffect(()=> {
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

  return (
    <>
      <img src={TxtProducto} alt="TxtProducto" className="photoProducts" />
      <div className="join" id="heros">
        {items.length > 0 ? (
          items
            .slice(0, 4)
            .map((prod) => (
              <Hero
                key={prod.id}
                image={prod.image}
                name={prod.name}
                descriptions={prod.descriptions}
                butInfo={prod.butInfo}
                category={prod.category}
              />
            ))
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}

export default Products;
