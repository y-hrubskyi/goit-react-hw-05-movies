import { Link, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

export const MoviesList = ({ data, isLoading, isError }) => {
  const location = useLocation();
  const isEmpty = data?.results && !data.results.length;

  return (
    <>
      {isError && <div>Something went wrong...</div>}
      {isLoading && <Loader />}
      {!isEmpty ? (
        <ul>
          {data?.results.map(({ id, name, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {name || title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        'No results'
      )}
    </>
  );
};
