import React from "react";
import "./searchresults.css";

function Searchresults({ searchResults, openPopup, errorMsg }) {
  if (errorMsg !== "") {
    return (
      <section className="results">
        <div className="error">
          <span>{errorMsg}</span>
        </div>
      </section>
    );
  } else {
    return (
      <section className="results">
        {searchResults.map((result) => (
          <div className="clearfix" onClick={() => openPopup(result.imdbID)}>
            <img
              className="r_img"
              src={result.Poster}
              alt="Image Not Available"
            />
            <div className="r-details">
              <h2 className="r_title">{result.Title}</h2>
              <h3 className="r_year">Year: {result.Year} </h3>
              <h3 className="r_type">Type: {result.Type}</h3>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default Searchresults;
