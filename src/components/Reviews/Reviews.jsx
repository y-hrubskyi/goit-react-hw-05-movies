import { useParams } from 'react-router-dom';

import { useDataApi } from 'hooks/useDataApi';
import { Loader } from 'components/Loader/Loader';
import { ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [{ data, isLoading, isError }] = useDataApi(
    `/movie/${movieId}/reviews`
  );
  const isEmpty = data?.results && !data.results.length;

  return (
    <div>
      {isError && <div>Something went wrong...</div>}
      {isLoading && <Loader />}
      {!isEmpty ? (
        <ReviewsList>
          {data?.results.map(item => (
            <li key={item.id}>
              <h4>{item.author}</h4>
              <p>{item.content}</p>
            </li>
          ))}
        </ReviewsList>
      ) : (
        'No any reviews'
      )}
    </div>
  );
};

export default Reviews;
