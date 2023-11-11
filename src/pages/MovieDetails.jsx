import { Suspense, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { useDataApi } from 'hooks/useDataApi';
import { Loader } from 'components/Loader/Loader';
import { Link, NavItem, NavList } from 'components/Layout/Layout.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [{ data, isLoading, isError }] = useDataApi(`/movie/${movieId}`, {});
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  return (
    <div>
      <Link to={backLinkRef.current}>⬅️ Go Back</Link>
      <h1>MovieDetails</h1>
      {isError && <div>Something went wrong...</div>}
      {isLoading && <Loader />}
      {data && (
        <>
          <li>
            <img
              src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
              alt=""
            />
            <h2>{data.title || data.name}</h2>
            <p>
              {data.release_date ||
                data.first_air_date ||
                data.known_for_department}
            </p>
            <p>
              {data.overview ||
                data?.known_for?.map(mov => mov.title).join(' ')}
            </p>
          </li>
          <div>
            <h3>Additional information</h3>
            <NavList>
              <NavItem>
                <Link to="cast">Cast</Link>
              </NavItem>
              <NavItem>
                <Link to="reviews">Reviews</Link>
              </NavItem>
            </NavList>
          </div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
