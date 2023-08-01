import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const CommonLayout = lazy(() => import('./commonLayout/commonLayout.jsx'));
const Home = lazy(() => import('../pages/home/home.jsx'));
const Movies = lazy(() => import('../pages/movies/movies.jsx'));
const MovieDetails = lazy(() => import('pages/movieDetails/movieDetails.jsx'));
const Cast = lazy(() => import('../pages/cast/cast.jsx'));
const Reviews = lazy(() => import('../pages/reviews/reviews.jsx'));

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
