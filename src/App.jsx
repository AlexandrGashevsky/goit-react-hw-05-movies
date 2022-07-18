import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Container from './components/Container';
import Loader from 'components/Loader';

const Cast = lazy(() => import('./pages/Cast/Cast'));
const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));
const NotFoundView = lazy(() => import('./pages/NotFoundView/NotFoundView'));

export const App = () => {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
