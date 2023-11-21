import { useState} from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading/Loading.jsx"
import Cards from "../Components/Cards/Cards.jsx";
import UseFirestoreDataSearch from "../Components/Hook/useFetchCon.js"
import "../Screens/Css/SearchScreen.css"

function SearchScreen(){
    const[search, setSearch]=useState([])
    const { query } = useParams();
    const { ItemCard, loading } = UseFirestoreDataSearch('Games','console', query);

    return (
        <>
        <h3 id="titleSearchScreen">Search for: {query}</h3>
        <div className="w-3/4 p-4 ">
        <div className="flex flex-wrap justify-start" id="CardProducto">
          {ItemCard.length > 0 ? (
            ItemCard
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
                  category={gamer.category}
                />
              ))
          ) : (
          <Loading/>
          )}
        </div>
      </div>
        </>
    );
}

export default SearchScreen