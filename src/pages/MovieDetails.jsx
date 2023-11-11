import { Suspense, useRef } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

import useDataApi from 'hooks/useDataApi';
import { Loader, PageLoader } from 'components/Loader';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orangered;
  }
`;

export default function MovieDetails() {
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
          <hr />
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <StyledLink to="cast">Cast</StyledLink>
              </li>
              <li>
                <StyledLink to="reviews">Reviews</StyledLink>
              </li>
            </ul>
          </div>
          <hr />
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
}
