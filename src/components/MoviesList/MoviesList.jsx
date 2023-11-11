import { Link, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader';

export default function MoviesList({ data, isLoading, isError }) {
  const location = useLocation();

  return (
    <>
      {isError && <div>Something went wrong...</div>}
      {isLoading && <Loader />}
      {data?.results?.length > 0 ? (
        <ul>
          {data.results.map(({ id, name, title }) => (
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
}
