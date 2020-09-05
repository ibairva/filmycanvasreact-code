import React from "react";
import "./movieinfo.css";
import Modal from "react-modal";

function Movieinfo({ movieData, modalIsOpen, setModalIsOpen, closePopup }) {
  // const customStyles = {
  //   content: {
  //     top: "35%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     marginRight: "-50%",
  //     width: "60%",
  //     transform: "translate(-40%, -10%)",
  //     overflow: "auto",
  //   },
  // };

  return (
    <div className="clearfx" id="info_container">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="movie-details">
          <div className="img-ratings">
            <img
              className="movie_img"
              src={movieData.Poster}
              alt="Image Not Availbale"
            />
            <div className="ratings">
              <p>
                <span>Metascore: </span>
                {movieData.Metascore}
              </p>
              <p>
                <span>IMDB Rating: </span>
                {movieData.imdbRating}
              </p>
              <p>
                <span>IMDB Votes: </span>
                {movieData.imdbVotes}
              </p>
            </div>
          </div>
          <div className="basic_info">
            <p>
              <span>Title: </span>
              {movieData.Title}
            </p>
            <p>
              <span>Year: </span>
              {movieData.Year}
            </p>
            <p>
              <span>Rated: </span>
              {movieData.Rated}
            </p>
            <p>
              <span>Released: </span>
              {movieData.Released}
            </p>
            <p>
              <span>Runtime: </span>
              {movieData.Runtime}
            </p>
            <p>
              <span>Genre: </span>
              {movieData.Genre}
            </p>
            <p>
              <span>Director: </span>
              {movieData.Director}
            </p>
            <p>
              <span>Writer: </span>
              {movieData.Writer}
            </p>
            <p>
              <span>Actors: </span>
              {movieData.Actors}
            </p>
            <p>
              <span>Language: </span>
              {movieData.Language}
            </p>
            <p>
              <span>Awards: </span>
              {movieData.Awards}
            </p>
            <p>
              <span>Plot: </span>
              {movieData.Plot}
            </p>
          </div>
          <footer className="info-footer">
            <a className="close-btn" id="search" onClick={closePopup}>
              <div>Close Window</div>
              {/* <i className="far fa-times-circle"></i> */}
            </a>
          </footer>
        </div>
      </Modal>
    </div>
  );
}
export default Movieinfo;
