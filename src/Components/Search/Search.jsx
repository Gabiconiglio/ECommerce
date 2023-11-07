import React, { useState } from "react";
import "./Search.css";

function Search() {
    const [inputVisible, setInputVisible] = useState(false);
  
    const toggleInput = () => {
      setInputVisible(!inputVisible);
    };
  
    return (
      <>
        <div className={`input-wrapper ${inputVisible ? "input-visible" : ""}`}>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-sm w-full max-w-xs"
            id="textoBuscador"
          />
        </div>
        <button
          className="btn btn-ghost btn-circle"
          onClick={toggleInput}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </>
    );
  }

export default Search;
