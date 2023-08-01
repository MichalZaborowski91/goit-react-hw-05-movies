import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from './movieDetails.module.css';
const API_KEY = 'ec14b12534cfa5aa544b4a61898160f3';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetail();
  }, [id]);

  const fetchMovieDetail = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );
      const data = await response.json();
      setMovieDetail(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={css.movieDetails}>
      <div>
        <button className={css.goBackBtn} onClick={goBack}>
          Go Back
        </button>
      </div>
      <div>
        {movieDetails && (
          <img
            className={css.movieImg}
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        )}
        {movieDetails ? (
          <div>
            <h1>{movieDetails.title}</h1>
            <h2>Popularity: {movieDetails.popularity}</h2>
            <h2>Overview:</h2>
            <p>{movieDetails.overview}</p>
            <h2>Genres:</h2>
            <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <nav>
        <ul>
          <li>
            <Link
              to={{
                pathname: `movies/${id}/cast`,
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `movies/${id}/reviews`,
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet context={id} />
    </div>
  );
};
export default MovieDetails;
