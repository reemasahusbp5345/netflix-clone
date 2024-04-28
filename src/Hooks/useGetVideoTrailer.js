import { useDispatch } from "react-redux";
import { options } from "../Utils/constatnts";
import { useEffect } from "react";
import { addVideoTrailer } from "../Redux/moviesSlice";

const useGetVideoTrailer = (movieId) => {
    const dispatch = useDispatch();
  const fetchNowPlayingMovies = async () => {
    try {
      const moviesData = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        options
      );

      const json = await moviesData.json();
      const trailer=json?.results?.find(movie=>movie?.type?.toLowerCase()==="trailer");
      dispatch(addVideoTrailer(trailer));
    } catch (error) {}
  };
  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);
};

export default useGetVideoTrailer;
