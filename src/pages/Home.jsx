import { useDataApi } from 'hooks/useDataApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { PageTitle } from 'components/Layout/Layout.styled';

const Home = () => {
  const [{ data, isLoading, isError }] = useDataApi('/trending/all/day');

  return (
    <div>
      <PageTitle>Trending today</PageTitle>
      <MoviesList data={data} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default Home;
