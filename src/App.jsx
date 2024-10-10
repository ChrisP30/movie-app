import "./App.css";
import MoviesDisplay from "./components/MoviesDisplay";
import Navbar from "./components/Navbar";
import SearchMoviesDisplay from "./components/SearchMoviesDisplay";
import { useState, useEffect } from "react";

function App() {
  const [moviesQuery, setMoviesQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.tvmaze.com/search/shows?q=${moviesQuery}`
        );
        const result = await response.json();
        console.log(result);
        setMovies([]); // Store the fetched data in state
        setMovies(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    if (moviesQuery) {
      fetchData();
    } else {
      setMovies([]);
    }
  }, [moviesQuery]);

  return (
    <div>
      <Navbar
        moviesQuery={moviesQuery}
        setMoviesQuery={setMoviesQuery}
        movies={movies}
      ></Navbar>
      <div className="main-content-container">
        <SearchMoviesDisplay
          movies={movies}
          setSelectedMovie={setSelectedMovie}
        ></SearchMoviesDisplay>
        <MoviesDisplay selectedMovie={selectedMovie}></MoviesDisplay>
      </div>
    </div>
  );
}

export default App;
