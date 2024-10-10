import "../styles/navbar.css";

function Navbar({ setMoviesQuery, movies }) {
  const searchMovies = (e) => {
    setMoviesQuery(e.target.value);
  };
  return (
    <nav>
      <div className="nav-logo">
        <span>🍿</span>
        <h1>MyMovies+</h1>
      </div>
      <input type="text" className="search-bar" onChange={searchMovies} />
      <div>
        <h2 className="found-text">
          Found <span>{movies.length}</span> results
        </h2>
      </div>
    </nav>
  );
}

export default Navbar;
