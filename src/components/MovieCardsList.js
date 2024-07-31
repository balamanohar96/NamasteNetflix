import React, { useRef } from "react";
import { Link } from "react-router-dom";

const MovieCardsList = ({ listTitle, movies }) => {
  const scrollRef = useRef();

  const scroll = (offset) => {
    scrollRef.current.scrollLeft += offset;
  };

  return (
    <div className="mb-4 relative px-8">
      <h2 className="pb-3  text-xl">{listTitle}</h2>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 border rounded-full text-red-500 bg-slate-200 p-2  absolute top-40 left-0 cursor-pointer z-30"
          onClick={() => scroll(-500)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <div ref={scrollRef} className="flex overflow-x-scroll scroll-smooth">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="mr-6 hover:scale-95">
              <Link to={"/movie/" + movie.id} state={movie}>
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
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 border rounded-full text-red-500 bg-slate-200 p-2  absolute top-40 right-0 cursor-pointer z-30"
          onClick={() => scroll(500)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default MovieCardsList;
