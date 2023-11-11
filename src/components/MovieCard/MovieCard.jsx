export const MovieCard = ({ data }) => {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} alt="" />
      <h2>{data.title}</h2>
      <p>{data.release_date}</p>
      <p>{data.overview}</p>
    </div>
  );
};
