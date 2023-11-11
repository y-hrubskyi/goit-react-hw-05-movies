import { useParams } from 'react-router-dom';
import useDataApi from 'hooks/useDataApi';
import { Loader } from '../Loader';

export default function Reviews() {
  const { movieId } = useParams();
  const [{ data, isLoading, isError }] = useDataApi(
    `/movie/${movieId}/reviews`,
    {}
  );

  return (
    <div>
      <h3>Reviews</h3>
      {isError && <div>Something went wrong...</div>}
      {isLoading && <Loader />}
      {data?.results?.length ? (
        <ul>
          {data.results.map(item => (
            <li key={item.id}>
              <p>{item.author}</p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        'No any reviews'
      )}
    </div>
  );
}
