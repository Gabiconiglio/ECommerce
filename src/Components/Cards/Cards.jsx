import { React, useState } from "react";
import Counter from "../Counter/Counter.jsx"
import "../Cards/Cards.css";

function Cards(props) {
  

  return (
    <>
      <div
        className="card card-compact w-105 h-105 bg-base-100 shadow-xl"
        id="cardsPrincipal"
      >
        <figure>
          <img src={props.background_image} alt="Shoes" id="imageCards"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <div className="textoCard">
            <div>
              <p>
                {" "}
                <strong>Console:</strong> {props.console}
              </p>
              <p>
                <strong>Format:</strong> {props.format}
              </p>
            </div>
            <div>
              <p>
                <strong>Conditions:</strong> {props.conditions}
              </p>
              <p>
                <strong>Price:</strong> ${props.price}
              </p>
            </div>
          </div>
          <div className="card-actions justify-center">
            <div>
              <div className="join">
                <Counter/>
              </div>
            </div>
            <button className="btn btn-outline">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
