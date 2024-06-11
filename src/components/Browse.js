import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import RunTrailer from "./RunTrailer";
import RunTrailerDetails from "./RunTrailerDetails";

const Browse = () => {
  useNowPlayingMovies();
  const moviesList = useSelector((store) => store.movie.moviesList);
  if (!moviesList) return;
  const firstMovie = moviesList[1];
  const { title, id, overview } = firstMovie;
  console.log(title,"  ", id);
  return (
    <div className="bg-gradient-to-b  from-black min-h-screen  text-white">
      <Header></Header>
      <RunTrailer movieID={id } />
      <RunTrailerDetails title={title} description={overview} />
    </div>
  );
};

export default Browse;
