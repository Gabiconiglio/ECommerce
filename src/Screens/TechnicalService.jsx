import UseFirestoreData from "../Components/Hook/useFetchFire.js";
import TxtService from "../Components/Imagines/TxtService.png";
import Loading from "../Components/Loading/Loading.jsx";
import Cards from "../Components/Cards/Cards.jsx";
import "../Screens/Css/technicalService.css";

function TechnicalService() {
  const { ItemCard} = UseFirestoreData("Games", "category", "TechnicalService");

  return (
    <div>
      <div className="flex">
        <div className="w-3/4 p-4 " id="infoTechinicalServices">
          <img src={TxtService} alt="TxtGames" className="photoService" />
          <div className="flex flex-wrap justify-start" id="CardProducto">
            {ItemCard.length > 0 ? (
              ItemCard.map((gamer) => (
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
              <Loading />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalService;
