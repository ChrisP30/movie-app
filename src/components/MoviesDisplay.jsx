import "../styles/myMoviesDisplay.css";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function MoviesDisplay({ selectedMovie }) {
  console.log(selectedMovie);

  const hasMovie = selectedMovie && selectedMovie.show;
  const hasScore = selectedMovie && selectedMovie.score;

  const [isMinimized, setIsMinimized] = useState(false);

  const minimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="movie-display-container">
      <div className="my-movies-info">
        <div className="minimize-display-container-my">
          <span onClick={minimize}>{!isMinimized ? "-" : "+"}</span>
        </div>
        <div>
          <h3>Selected Movie: {hasMovie ? selectedMovie.show.name : ""}</h3>
        </div>
        <div className="info-content">
          <p>
            <span>⭐️</span>
            <span>
              {hasMovie && selectedMovie.show.rating.average
                ? selectedMovie.show.rating.average
                : "0.0"}
            </span>
          </p>
          <p>
            <span>🌟</span>
            <span>
              {hasScore && selectedMovie.score ? selectedMovie.score : "0.0"}
            </span>
          </p>
          <p>
            <span>⏳</span>
            <span>
              {hasMovie && selectedMovie.show.schedule.time
                ? selectedMovie.show.schedule.time
                : "0"}
            </span>
          </p>
        </div>
      </div>
      <CSSTransition
        in={!isMinimized} // Use the negated state here if you want the component to be visible when `isMinimized` is `false`
        timeout={300} // Duration of the transition
        classNames="movie-display" // Prefix for the transition classNames
        unmountOnExit // Unmount the component from the DOM when it is not in a visible state
      >
        <div className="movie-display-container-content">
          <div className="movie-genres">
            <p>Genres:</p>
            <ul>
              {hasMovie && selectedMovie.show.genres ? (
                selectedMovie.show.genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))
              ) : (
                <li>No Genres</li>
              )}
            </ul>
          </div>
          <div className="selected-movie-title">
            <h3>{hasMovie ? selectedMovie.show.name : ""}</h3>
          </div>
          <div>
            {hasMovie &&
              selectedMovie.show.image &&
              selectedMovie.show.image.medium && (
                <img
                  src={selectedMovie.show.image.medium}
                  alt={selectedMovie.show.name}
                  className="selected-movie-image"
                />
              )}
          </div>
          <div className="summary-container">
            <p>
              {hasMovie && selectedMovie.show.summary
                ? selectedMovie.show.summary.replace(/<\/?p>|<\/?b>/g, "")
                : "No Summary"}
            </p>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default MoviesDisplay;
