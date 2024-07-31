import React, { useState } from "react";
import RunTrailer from "./RunTrailer";
import RunTrailerDetails from "./RunTrailerDetails";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const PrimaryContainer = () => {
  const [randomNumber2] = useState(Math.round(Math.random() * 20));

  usePopularMovies();
  useNowPlayingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  const moviesList = useSelector((store) => store.movie.nowPlayingMovies);
  if (!moviesList) return;

  const randomMovie = moviesList[randomNumber2];

  const { title, id, overview, vote_average } = randomMovie;
  return (
    <div className="-mt-16">
      <RunTrailerDetails
        movieID={id}
        title={title}
        description={overview}
        rating={vote_average}
      />
      <RunTrailer movieID={id} />
    </div>
  );
};

export default PrimaryContainer;
