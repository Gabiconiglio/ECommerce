import { React} from "react";
import Carousel from "../Components/Carousel/Carousel";
import CardsHome from "../Components/Cards/CardsHome.jsx";
import UseFirestoreDataSearch from "../Components/Hook/useFetchCon.js";
import "../Screens/Css/Home.css";

function Home() {
  const {ItemCard: ItemCardGames} = UseFirestoreDataSearch("Games", "category", "Games");
  const {ItemCard:ItemCardConsole} = UseFirestoreDataSearch("Games", "category", "Console");
  const {ItemCard:ItemCardAccessorios} = UseFirestoreDataSearch("Games", "category", "Accessories");


  return (
    <div>
      <Carousel />
      <CardsHome title={"The most popular"} data={ItemCardGames} cond={"Home"}/>
      <CardsHome title={"New console income"} data={ItemCardConsole}cond={"Home"}/>
      <CardsHome title={"Accessories on sale"} data={ItemCardAccessorios}cond={"Home"}/>
      <div id="separator"></div>
    </div>
  );
}
export default Home;
