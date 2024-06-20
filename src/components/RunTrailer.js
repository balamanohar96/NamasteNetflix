import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const RunTrailer = ({ movieID }) => {
  useTrailerVideo(movieID);
  const trailerVideo = useSelector((store) => store.movie.trailerVideo);
  if (!trailerVideo) return;
  return (
    <div className="w-screen overflow-hidden ">
      <iframe
        className="w-screen aspect-video "
        width="1349"
        height="759"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&showinfo=0&Version=3&loop=1&rel=0&mute=1"
        }
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default RunTrailer;
