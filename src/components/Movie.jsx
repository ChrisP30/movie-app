import "../styles/movie.css";

function Movie({ movie, setSelectedMovie }) {
  const year = movie.show.premiered
    ? new Date(movie.show.premiered).getFullYear()
    : "";

  const selectMovie = () => {
    setSelectedMovie(movie);
  };

  return (
    <div className="movie-info-container" onClick={selectMovie}>
      <div>
        {movie.show.image && movie.show.image.medium && (
          <img
            src={movie.show.image.medium}
            alt={movie.show.name}
            className="movie-image"
          />
        )}
      </div>
      <div className="search-movie-info-content">
        <p>{movie.show.name}</p>
        {year && <p>{year}</p>}
      </div>
    </div>
  );
}

export default Movie;
