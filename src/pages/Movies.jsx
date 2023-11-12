import { useSearchParams } from 'react-router-dom';

import { useDataApi } from 'hooks/useDataApi';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    query ? `/search/movie?query=${query}` : ''
  );

  const handleChange = e => {
    const query = e.target.value;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) {
      alert("Please, enter movie's name!");
      return;
    }

    doFetch(`/search/movie?query=${query}`);
  };

  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <MoviesList data={data} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default Movies;
