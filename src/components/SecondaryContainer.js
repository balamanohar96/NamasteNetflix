import React from "react";
import { useSelector } from "react-redux";
import MovieCardsList from "./MovieCardsList";

const SecondaryContainer = () => {
  const popularMovies = useSelector((store) => store.movie.popularMovies);
  const upcomingMovies = useSelector((store) => store.movie.upcomingMovies);
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovies);
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);
  if (
    !nowPlayingMovies ||
    !upcomingMovies ||
    !topRatedMovies ||
    !popularMovies
  ) {
    return;
  } else
    return (
      <div className=" bg-gradient-to-b from-cyan-950 to-black  text-white">
        <div className="  relative z-10 h-full pb-56 -mt-56 pl-8">
          <MovieCardsList listTitle={"New Released Movies"} movies={nowPlayingMovies} />
          <MovieCardsList listTitle={"Top Rated Movies"} movies={topRatedMovies} />
          <MovieCardsList listTitle={"Popular Movies"} movies={popularMovies} />
          <MovieCardsList listTitle={"Upcoming Movies"} movies={upcomingMovies} />
        </div>
      </div>
    );
};

export default SecondaryContainer;
