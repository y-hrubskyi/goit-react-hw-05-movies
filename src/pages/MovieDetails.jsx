import { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { useDataApi } from 'hooks/useDataApi';
import { Loader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { MovieNav } from 'components/MovieNav/MovieNav';

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
          <MovieCard data={data} />
          <MovieNav />

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
