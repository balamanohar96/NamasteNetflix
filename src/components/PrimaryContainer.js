import React from "react";
import RunTrailer from "./RunTrailer";
import RunTrailerDetails from "./RunTrailerDetails";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const PrimaryContainer = () => {
  usePopularMovies();
  useNowPlayingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  const moviesList = useSelector((store) => store.movie.nowPlayingMovies);
  if (!moviesList) return;

  let randomNumber = 10;
  if (
    moviesList[randomNumber].title === "Kali: Avenging Angel" ||
    moviesList[randomNumber].title === "May the 12th Be with You"
  ) {
    randomNumber -= 2;
    console.log(randomNumber, "revised");
  }
  const randomMovie = moviesList[randomNumber];
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
