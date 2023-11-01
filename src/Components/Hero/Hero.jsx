import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Hero/Hero.css";

function Home(props) {
  return (
    <>
      <div className="hero bg-base-200 heroCont " >
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={props.image}
            className="max-w-sm rounded-lg shadow-2xl"
            id="imagenHero"
          />
          <div id="heroInfo">
            <h1 className="text-5xl font-bold">{props.name}</h1>
            <p className="py-6">
              {props.descriptions}
            </p>
            <Link to={`/Productos/${props.category}`}>
            <button className="btn btn-outline" id="botonHero">{props.butInfo}</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;

