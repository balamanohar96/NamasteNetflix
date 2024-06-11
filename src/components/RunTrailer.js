import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const RunTrailer = ({ movieID }) => {
  useTrailerVideo(movieID);
  const trailerVideo = useSelector((store) => store.movie.trailerVideo);
  console.log(trailerVideo);
  if (!trailerVideo) return;
  return (
    <div className="absolute">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&showinfo=0&Version=3&loop=1&rel=0&mute=1"
        }
        frameborder="0"
        allowfullscreen
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default RunTrailer;
