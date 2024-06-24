import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { OPTIONS } from "../utils/constants";

const Movie = () => {
  const location = useLocation();
  console.log(location);
  const { state } = location;
  const [trailerDetails, setTrailerDetails] = useState(null);
  useEffect(() => {
    const fetchTrailer = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          state.id +
          "/videos?language=en-US",
        OPTIONS
      );
      const json = await response.json();
      const trailerVideoClips = json.results;
      const trailers = trailerVideoClips.filter(
        (video) => video.type === "Trailer"
      );
      const trailer =
        trailers.length === 0 ? trailerVideoClips[0] : trailers[0];
      setTrailerDetails(trailer);
    };
    fetchTrailer();
  }, [state.id]);
  if (trailerDetails === null) return <h1>Loading....</h1>;
  return (
    <div className="w-screen overflow-hidden ">
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailerDetails.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default Movie;
