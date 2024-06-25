import { useEffect, useState } from "react";
import { OPTIONS } from "../utils/constants";

const useHeroMovieTrailer = (id) => {
  const [trailerDetails, setTrailerDetails] = useState(null);
  useEffect(() => {
    const fetchTrailer = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
        OPTIONS
      );
      const json = await response.json();
      const trailerVideoClips = json.results;
      const trailers = trailerVideoClips.filter(
        (video) => video.type === "Trailer"
      );
      const trailerInfo =
        trailers.length === 0 ? trailerVideoClips[0] : trailers[0];
      setTrailerDetails(trailerInfo);
    };
    fetchTrailer();
  }, [id]);
  return trailerDetails;
};

export default useHeroMovieTrailer;
