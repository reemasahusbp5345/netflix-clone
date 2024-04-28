import { useDispatch } from "react-redux";
import { options } from "../Utils/constatnts";
import { useEffect } from "react";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from "../Redux/moviesSlice";

const useMoviesLists = (movieSection) => {
    const dispatch = useDispatch();
  const fetchMoviesLists = async () => {
    try {
      const moviesData = await fetch(
        `https://api.themoviedb.org/3/movie/${movieSection}?language=en-US&page=1`,
        options
      );

      const json = await moviesData.json();
      if(movieSection==="now_playing"){
        dispatch(addNowPlayingMovies(json?.results));
      }else if(movieSection==="popular"){
        dispatch(addPopularMovies(json?.results));
      }else if(movieSection==="top_rated"){
        dispatch(addTopRatedMovies(json?.results));
      }else if(movieSection==="upcoming"){
        dispatch(addUpcomingMovies(json?.results));
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchMoviesLists();
     // eslint-disable-next-line
  }, []);
};

export default useMoviesLists;
