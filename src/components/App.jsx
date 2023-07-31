import { Route, Routes } from 'react-router-dom';
import CommonLayout from './commonLayout.jsx';
import Home from '../pages/home.jsx';
import Movies from '../pages/movies.jsx';
import MovieDetails from 'pages/movieDetails.jsx';
import Cast from '../pages/cast.jsx';
import Reviews from '../pages/reviews.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="movies/:id/cast" element={<Cast />} />
          <Route path="movies/:id/reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
export default App;
