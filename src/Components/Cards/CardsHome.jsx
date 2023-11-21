import Loading from "../Loading/Loading.jsx"
import Cards from "../Cards/Cards.jsx"
import "../Cards/CardsHome.css"

function CardsHome(props) {
  return (
    <div>
      <h3 id="textHome">|{props.title}</h3>
      <div className="w-3/4 p-4">
        <div className="flex flex-wrap justify-start" id="CardHome">
          {props.data.length > 0 ? (
            props.data.map((item) => (
              <Cards
                key={item.key}
                customKey={item.key}
                name={item.name}
                background_image={item.background_image}
                price={item.price}
                console={item.console}
                format={item.format}
                conditions={item.conditions}
                category={item.category}
                cond={props.cond}
              />
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}

export default CardsHome;
