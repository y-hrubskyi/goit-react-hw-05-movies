import { MovieTitle, ReleaseDate, StyledMovieCard } from './MovieCard.styled';

export const MovieCard = ({ data }) => {
  return (
    <StyledMovieCard>
      <img src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt="" />
      <div>
        <MovieTitle>{data.title}</MovieTitle>
        <ReleaseDate>{data.release_date}</ReleaseDate>
        <p>{data.overview}</p>
      </div>
    </StyledMovieCard>
  );
};
