import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";

const useTrailerVideo = (movieID) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTrailer = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieID +
          "/videos?language=en-US",
        OPTIONS
      );
      const json = await response.json();
      const trailerVideoClips = json.results;
      const trailers = trailerVideoClips.filter(
        (video) => video.type === "Trailer"
      );
      const trailer =
        trailers.length !== 0 ? trailers[0] : trailerVideoClips[0];
      dispatch(addTrailer(trailer));
    };
    fetchTrailer();
  }, [movieID, dispatch]);
};

export default useTrailerVideo;
