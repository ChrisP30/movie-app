import "../styles/searchDisplay.css";
import Movie from "./Movie";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

function SearchMoviesDisplay({ movies, setSelectedMovie }) {
  const [isMinimized, setIsMinimized] = useState(false);

  const minimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="search-display-container">
      <div className="minimize-display-container">
        <span onClick={minimize}>{!isMinimized ? "-" : "+"}</span>
      </div>
      <CSSTransition
        in={!isMinimized} // Use the negated state here if you want the component to be visible when `isMinimized` is `false`
        timeout={300} // Duration of the transition
        classNames="movie-display" // Prefix for the transition classNames
        unmountOnExit // Unmount the component from the DOM when it is not in a visible state
      >
        <div className="search-display-container-content">
          {movies.map((movie) => (
            <Movie
              key={movie.show.id}
              movie={movie}
              setSelectedMovie={setSelectedMovie}
            />
          ))}
        </div>
      </CSSTransition>
    </div>
  );
}

export default SearchMoviesDisplay;
