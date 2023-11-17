import { React, useState,useEffect } from "react";
import { getFirestore, getDocs, collection,query,where} from 'firebase/firestore'
import Loading from "../Components/Loading/Loading.jsx"
import Cards from "../Components/Cards/Cards.jsx";
import Drawer from "../Components/Drawer/Drawer.jsx";
import TxtGames from "../Components/Imagines/TxtGames.png"
import "../Screens/Css/Games.css";

function Games() {
  const [items, setItems] = useState({})

  useEffect(()=> {
    const db = getFirestore()

    const itemsRef = collection(db, 'Games')
    const queryFilter = query(itemsRef, where('category', '==', 'Games'));

    getDocs(queryFilter)
    .then(res => {
      if(res.size === 0) {
        console.log('No results');
      }
      setItems(res.docs.map(doc => ({id: doc.id, ...doc.data()})))
    })
    
  }, [])

  console.log(items)

  return (
    <div className="flex">
      <div className="" id="drawerGames">
        <Drawer plat={true} ranking={true} />
      </div>
      <div className="w-3/4 p-4 ">
        <img src={TxtGames} alt="TxtGames" className="photoGames" />
        <div className="flex flex-wrap justify-start" id="CardProducto">
          {items.length > 0 ? (
            items
              .map((gamer) => (
                <Cards
                  key={gamer.key}
                  customKey={gamer.key}
                  name={gamer.name}
                  background_image={gamer.background_image}
                  price={gamer.price}
                  console={gamer.console}
                  format={gamer.format}
                  conditions={gamer.conditions}
                />
              ))
          ) : (
          <Loading/>
          )}
        </div>
      </div>
    </div>
  );
}

export default Games;
