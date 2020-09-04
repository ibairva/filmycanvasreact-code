import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/navbar";
import Searchbox from "./components/searchbox";
import Searchresults from "./components/searchresults";
import Movieinfo from "./components/movieinfo";
import Modal from "react-modal";
import bg1 from "./bg1.png";

Modal.setAppElement("#root");
function App() {
  const [userInput, setUserInput] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [movieData, setMovieData] = useState({});
  const [errorMsg, setErrorMsg] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const myApiUrl = "https://www.omdbapi.com/?apikey=39201518&";

  const handleInput = (e) => {
    let input = e.target.value;
    setUserInput(() => {
      return input;
    });
  };

  const onKeySearch = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  const search = () => {
    if (userInput === undefined) {
      alert("Movie name cannot be blank");
    } else {
      axios(myApiUrl + "s=" + userInput).then(({ data }) => {
        console.log(userInput);
        if (data.Error) {
          setSearchResults([]);
          let msg = "Movie not Found.Try Again";
          setErrorMsg(msg);
        } else {
          setErrorMsg("");
          let results = data.Search;
          setSearchResults(results);
        }
      });
    }
  };

  const openPopup = (id) => {
    axios(myApiUrl + "i=" + id).then(({ data }) => {
      let clickedMovieData = data;
      console.log(clickedMovieData);
      setMovieData(clickedMovieData);
    });
    console.log(movieData);
    setModalIsOpen(true);
  };

  return (
    <div className="canvas">
      <div className="wrapper">
        <img className="bg1" src={bg1} alt="NA" />
        <Navbar />
        <Searchbox
          handleInput={handleInput}
          search={search}
          onKeySearch={onKeySearch}
        />
        {console.log(searchResults)}
        {console.log(errorMsg)}
        <Searchresults
          searchResults={searchResults}
          openPopup={openPopup}
          errorMsg={errorMsg}
        />

        {typeof movieData.Title != "undefined" ? (
          <Movieinfo
            movieData={movieData}
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
          />
        ) : (
          false
        )}
      </div>
      <footer className="main-footer">
        <h3>All Rights Reserved @FilmyCanvas</h3>
      </footer>
    </div>
  );
}

export default App;
