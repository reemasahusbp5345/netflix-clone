import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryComponent = () => {
  const movies = useSelector((store) => store?.movie);
  return (
    <div className="bg-black">
      <div className="-mt-80 text-white ml-12">
        {movies?.nowPlayingMovies?.length > 0 && (
          <MovieList title={"NOW PLAYING"} movies={movies?.nowPlayingMovies} />
        )}
        {movies?.popularMovies?.length > 0 && (
          <MovieList title={"POPULAR"} movies={movies?.popularMovies} />
        )}
        {movies?.topRatedMovies?.length > 0 && (
          <MovieList title={"TOP RATED"} movies={movies?.topRatedMovies} />
        )}
        {movies?.upcomingMovies?.length > 0 && (
          <MovieList title={"UPCOMING"} movies={movies?.upcomingMovies} />
        )}
      </div>
    </div>
  );
};

export default SecondaryComponent;
