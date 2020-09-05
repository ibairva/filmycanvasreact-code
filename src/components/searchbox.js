import React from "react";
import "./searchbox.css";

function Searchbox({ handleInput, onKeySearch, validateInput, inputError }) {
  return (
    <div>
      <div className="title_room">
        <h1>
          Hello <span>Movie Lovers.</span> Let's hope your{" "}
          <span> Moviehunt</span> ends here...{" "}
        </h1>
        <h2>
          Search for a <span>Movie</span>!!!!
        </h2>
      </div>
      <div className="search-panel">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search Movie"
            onChange={handleInput}
            onKeyPress={onKeySearch}
          />
          <a className="search-btn" onClick={validateInput} href="#">
            <i className="fas fa-search"></i>
          </a>
        </div>
        <div className="blank-error">
          <span>{inputError}</span>
        </div>
      </div>
    </div>
  );
}

export default Searchbox;
