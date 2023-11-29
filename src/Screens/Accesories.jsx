import { React, useEffect, useState} from "react";
import useFetchDrawer from "../Components/Hook/useFetchDrawer.js";
import Loading from "../Components/Loading/Loading.jsx";
import Cards from "../Components/Cards/Cards.jsx";
import Drawer from "../Components/Drawer/Drawer.jsx";
import TxtAccessories from "../Components/Imagines/TxtAccessories.jpg";
import "../Screens/Css/Accessories.css";

function Accessories() {
  
  const [filters, setFilters] = useState({conditions:"", minPrice:"",maxPrice:"",console:""});
  const { ItemCard, loading } = useFetchDrawer('Games', 'category', 'Accessories', filters);

  useEffect(() => {
 
  }, [ItemCard]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };
  
  return (
    <div>
      <div className="flex">
        <div className="" id="drawerAccsessories">
        <Drawer plat={false} rank={false} filter={handleFilterChange}/>
        </div>
        <div className="w-3/4 p-4 " id="SepAccessories">
          <img
            src={TxtAccessories}
            alt="TxtGames"
            className="photoAccessories"
          />
          <div className="flex flex-wrap justify-start" id="CardProducto">
            {ItemCard.length > 0 ? (
              ItemCard.map((gamer) => (
                <Cards
                  key={gamer.key}
                  customKey={gamer.key}
                  name={gamer.name}
                  background_image={gamer.background_image}
                  price={gamer.price}
                  conditions={gamer.conditions}
                  category={gamer.category}
                  console={gamer.console}
                />
              ))
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accessories;
