import React from "react";
import { useLocation } from "react-router-dom";
import useHeroMovieTrailer from "../hooks/useHeroMovieTrailer";
import Shimmer from "./Shimmer";
import Footer from "./Footer";

const Movie = () => {
  const location = useLocation();
  const { state } = location;
  const trailerDetails = useHeroMovieTrailer(state.id);

  if (trailerDetails === null) return <Shimmer />;

  return (
    <div className="flex flex-col justify-between">
      <div className="w-screen  bg-black text-white ">
        <iframe
          className="w-screen aspect-video "
          src={
            "https://www.youtube.com/embed/" +
            trailerDetails?.key +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
        ></iframe>

        <div className="p-4 pb-60 bg-black">
          <h2 className="text-xl md:text-5xl font-bold mb-4">{state.title}</h2>
          <h2 className="md:text-lg  mb-2">
            <span className="text-red-500">Rating</span> : {state.vote_average}
          </h2>
          <h2 className="md:text-lg  mb-4">
            <span className="text-red-500">Overview</span> : {state.overview}
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Movie;
