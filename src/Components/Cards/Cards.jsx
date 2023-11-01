import Mafia2 from "../Imagines/Mafia2.jpg";
import "../Cards/Cards.css";

function Cards(props) {
  return (
    <>
      <div
        className="card card-compact w-105 h-105 bg-base-100 shadow-xl"
        id="cardsPrincipal"
      >
        <figure>
          <img src={Mafia2} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <div>
            <p>Price: ${props.price}</p>
          </div>
          <div>
            <div className="join">
              <button className="btn btn-ghost btn-circle">«</button>
              <button className="btn btn-ghost btn-circle pepe">2</button>
              <button className="btn btn-ghost btn-circle">»</button>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
