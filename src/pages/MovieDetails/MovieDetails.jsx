import { useState, useEffect, Suspense } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/API';
import MoviePublic from 'components/MovieRender';
import Loader from 'components/Loader';
import ToPrevPageButton from 'components/ToPrevPageButton';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId).then(res => {
      setMovie(res.data);
    });
  }, [movieId]);

  const path = location?.state?.from ?? '/';


  return (
    <>
      <NavLink to={path}>
        <ToPrevPageButton/>
      </NavLink>
      {movie && <MoviePublic movie={movie} />}
      <hr />
      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink to="cast" state={{ from: path }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={{ from: path }}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <hr />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
