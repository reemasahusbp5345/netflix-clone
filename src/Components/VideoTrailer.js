import { useSelector } from "react-redux";
import useGetVideoTrailer from "../Hooks/useGetVideoTrailer";

const VideoTrailer = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store?.movie?.trailer);
  useGetVideoTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
      ></iframe>
    </div>
  );
};
export default VideoTrailer;
