import React, { useState } from "react";
import Rating from "../Rating/Rating.jsx";
import "../ModalDetail/ModalDetail.css";

function ModalDetail({
  closeModal,
  name,
  released,
  image,
  genres,
  Platform,
  Rank,
  customKey
}) {
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <img src={image} alt="Games" id="" />
        <h3 className="font-bold text-lg" id="textModalDetail">
          {name}
        </h3>
        <div className="py-4" id="InfoDetail">
        <p>
            <strong>Id:</strong>{customKey}
            
          </p>
          <p>
            <strong>Release Date:</strong>{" "}
            {new Date(released).toLocaleDateString("es-ES")}
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {genres && genres.length > 0 ? (
              <>
                {genres[0].name}
                {genres.length > 1 && ` / ${genres[1].name}`}
              </>
            ) : (
              "No genres available"
            )}
          </p>
          <p>
            <strong>Platform:</strong> {Platform}
          </p>
        </div>
        <Rating Rank={Rank} />
        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={closeModal}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default ModalDetail;
