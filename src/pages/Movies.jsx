import { useSearchParams } from 'react-router-dom';

import { useDataApi } from 'hooks/useDataApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { PageTitle } from 'components/Layout/Layout.styled';
import { SearchBar } from 'components/SearchBar/SearchBar';

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
      <PageTitle>Search</PageTitle>
      <SearchBar
        query={query}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <MoviesList data={data} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default Movies;
