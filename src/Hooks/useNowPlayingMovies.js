import { useDispatch } from "react-redux";
import { options } from "../Utils/constatnts";
import { useEffect } from "react";
import { addMovies } from "../Redux/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
  const fetchNowPlayingMovies = async () => {
    try {
      const moviesData = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
      );

      const json = await moviesData.json();
      dispatch(addMovies(json?.results));
    } catch (error) {}
  };
  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
