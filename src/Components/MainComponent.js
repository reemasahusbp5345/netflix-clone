import VideoTitle from "./VideoTitle";
import VideoTrailer from "./VideoTrailer";
import useMoviesLists from "../Hooks/useMoviesLists";
import { useSelector } from "react-redux";

const MainComponent=()=>{
    const nowPlayingMovies=useSelector(store=>store?.movie?.nowPlayingMovies);
    useMoviesLists("now_playing");
    useMoviesLists("popular");
    useMoviesLists("top_rated");
    useMoviesLists("upcoming");
    if(!nowPlayingMovies) return;
   const mainMovie=nowPlayingMovies[0];
    return(
        <div className="bg-gradient-to-r from-black">
            <VideoTitle {...mainMovie}/>
            <VideoTrailer movieId={mainMovie?.id}/>
        </div>
    )
}
export default MainComponent;