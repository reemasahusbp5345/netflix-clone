import VideoTitle from "./VideoTitle";
import VideoTrailer from "./VideoTrailer";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";

const MainComponent=()=>{
    const nowPlayingMovies=useSelector(store=>store?.movie?.nowPlayingMovies);
    useNowPlayingMovies();
    if(!nowPlayingMovies) return;
   const mainMovie=nowPlayingMovies[0];
    return(
        <div>
            <VideoTitle {...mainMovie}/>
            <VideoTrailer movieId={mainMovie?.id}/>
        </div>
    )
}
export default MainComponent;