import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryComponent=()=>{
    const movies=useSelector(store=>store?.movie?.nowPlayingMovies);
    return(
        <div className="bg-black">
            <div className="-mt-64 text-white ml-12">
            <MovieList title={"NOW PLAYING"} movies={movies}/>
            <MovieList title={"POPULAR"} movies={movies}/>
            <MovieList title={"TOP RATED"} movies={movies}/>
            <MovieList title={"UPCOMING"} movies={movies}/>
            </div>
        </div>
    )
}

export default SecondaryComponent;