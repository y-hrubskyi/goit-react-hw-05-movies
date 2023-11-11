import useDataApi from 'hooks/useDataApi';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Home() {
  const [{ data, isLoading, isError }] = useDataApi('/trending/all/day', {
    movies: [],
  });

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList data={data} isLoading={isLoading} isError={isError} />
    </div>
  );
}
