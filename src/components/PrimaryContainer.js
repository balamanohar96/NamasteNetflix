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
  let randomNumber = Math.floor(Math.random() * moviesList.length);
  console.log(randomNumber);
  if (
    moviesList[randomNumber].title === "Kali: Avenging Angel" ||
    moviesList[randomNumber].title === "May the 12th Be with You"
  ) {
    randomNumber -= 2;
    console.log(randomNumber);
  }
  const randomMovie = moviesList[randomNumber];
  const { title, id, overview } = randomMovie;
  return (
    <div className="-mt-16">
      <RunTrailerDetails title={title} description={overview} />
      <RunTrailer movieID={id} />
    </div>
  );
};

export default PrimaryContainer;
