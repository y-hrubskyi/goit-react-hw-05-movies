import { useParams } from 'react-router-dom';
import { useDataApi } from 'hooks/useDataApi';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [{ data, isLoading, isError }] = useDataApi(
    `/movie/${movieId}/credits`
  );
  const isEmpty = data?.cast && !data.cast.length;

  return (
    <div>
      <h3>Cast</h3>
      {isError && <div>Something went wrong...</div>}
      {isLoading && <Loader />}
      {!isEmpty ? (
        <ul>
          {data?.cast.map(item => (
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
                alt=""
              />
              <h2>{item.name}</h2>
              <p>Character: {item.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        'No any casts'
      )}
    </div>
  );
};

export default Cast;
