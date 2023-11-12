import { useParams } from 'react-router-dom';
import { useDataApi } from 'hooks/useDataApi';
import { Loader } from 'components/Loader/Loader';

import { CastItem, CastList } from './Cast.styled';
import placeholder from 'img/person-placeholder.jpg';

const setPhoto = link => {
  return link ? `https://image.tmdb.org/t/p/w200${link}` : placeholder;
};

const Cast = () => {
  const { movieId } = useParams();
  const [{ data, isLoading, isError }] = useDataApi(
    `/movie/${movieId}/credits`
  );
  const isEmpty = data?.cast && !data.cast.length;

  return (
    <div>
      {isError && <div>Something went wrong...</div>}
      {isLoading && <Loader />}
      {!isEmpty ? (
        <CastList>
          {data?.cast.map(item => (
            <CastItem key={item.id}>
              <img
                src={setPhoto(item.profile_path)}
                alt={item.name}
                width="200"
              />
              <h4>{item.name}</h4>
              <p>Character: {item.character}</p>
            </CastItem>
          ))}
        </CastList>
      ) : (
        'No any casts'
      )}
    </div>
  );
};

export default Cast;
