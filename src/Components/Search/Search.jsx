import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertConfirm from "../Alert/Alert.jsx"
import "./Search.css";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handletext = () => {
    if (!input) {
      alert("To do the search you must enter a character.");
    } else {
      navigate(`/Search/${input}`);
      setInput("")
    }
  };

  return (
    <>
      <div>
        <div className="join">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="input-container"
          >
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered input-sm w-full max-w-xs"
              id="textoBuscador"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </form>
        </div>
      </div>
      <button
        tabIndex={4}
        className="btn btn-ghost btn-circle"
        onClick={handletext}
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
