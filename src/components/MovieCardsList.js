import React from "react";
import { Link } from "react-router-dom";

const MovieCardsList = ({ listTitle, movies }) => {
  return (
    <div className="mb-4">
      <h2 className="pb-3 text-xl">{listTitle}</h2>
      <div className="flex overflow-x-scroll ">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="mr-6 hover:scale-95">
              <Link to="/movie" state={movie}>
                <img
                  className="min-w-48 rounded-lg"
                  alt="movie poster"
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                ></img>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCardsList;
