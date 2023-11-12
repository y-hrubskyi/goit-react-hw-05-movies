import { useParams } from 'react-router-dom';

import { useDataApi } from 'hooks/useDataApi';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [{ data, isLoading, isError }] = useDataApi(
    `/movie/${movieId}/reviews`
  );
  const isEmpty = data?.results && !data.results.length;

  return (
    <div>
      <h3>Reviews</h3>
      {isError && <div>Something went wrong...</div>}
      {isLoading && <Loader />}
      {!isEmpty ? (
        <ul>
          {data?.results.map(item => (
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
};

export default Reviews;
