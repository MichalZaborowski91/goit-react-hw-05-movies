import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const API_KEY = 'ec14b12534cfa5aa544b4a61898160f3';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    try {
      const options = {
        method: 'GET',
        headers: { accept: 'application/json' },
      };
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
        options
      );
      const data = await response.json();
      setTrendingMovies(data.results);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
