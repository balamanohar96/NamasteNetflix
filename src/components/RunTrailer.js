import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const RunTrailer = ({ movieID }) => {
  useTrailerVideo(movieID);
  const trailerVideo = useSelector((store) => store.movie.trailerVideo);
  if (!trailerVideo || trailerVideo.length === 0)
    return <h1 className="h-screen"> </h1>;
  return (
    <div className="w-screen ">
      <iframe
        className="w-screen aspect-video "
        width="1349"
        height="759"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default RunTrailer;
