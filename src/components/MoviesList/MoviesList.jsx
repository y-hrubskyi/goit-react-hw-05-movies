import { Link, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { MovieItem, StyledMoviesList } from './MoviesList.styled';

export const MoviesList = ({ data, isLoading, isError }) => {
  const location = useLocation();
  const isEmpty = data?.results && !data.results.length;

  return (
    <>
      {isError && <div>Something went wrong...</div>}
      {isLoading && <Loader />}
      {!isEmpty ? (
        <StyledMoviesList>
          {data?.results.map(({ id, name, title }) => (
            <MovieItem key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {name || title}
              </Link>
            </MovieItem>
          ))}
        </StyledMoviesList>
      ) : (
        'No results'
      )}
    </>
  );
};
