import { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './movies.module.css';
const API_KEY = 'ec14b12534cfa5aa544b4a61898160f3';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchMovies();
  };

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className={css.form}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            className={css.input}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        <h2 className={css.searchHeader}>Search Results:</h2>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Movies;
