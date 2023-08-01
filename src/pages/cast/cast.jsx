import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import css from './cast.module.css';
const API_KEY = 'ec14b12534cfa5aa544b4a61898160f3';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const id = useOutletContext();

  useEffect(() => {
    fetchCredits();
  }, [id]);

  const fetchCredits = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
      );
      const data = await response.json();
      setCast(data.cast);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className={css.castContainer}>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
