import React, { useRef } from "react";
import rightArrow from "../utils/caret-right.svg";

const MovieCardsList = ({ listTitle, movies }) => {
  const listRef = useRef();

  // basic on whether mobile or desktop deciding scollpoint
  const scrollPoint = window.innerWidth < 768 ? 250 : 500;

  // left scroll handler
  const scrollInLeft = () => {
    listRef.current.scrollTo({
      left: listRef.current.scrollLeft - scrollPoint,
      behavior: "smooth",
    });
  };

  // right scroll handlder
  const scrollInRight = () => {
    listRef.current.scrollTo({
      left: listRef.current.scrollLeft + scrollPoint,
      behavior: "smooth",
    });
  };
  return (
    <div className="mb-4">
      <h2 className="pb-2">{listTitle}</h2>
      <div
        className="flex overflow-x-scroll "
        ref={listRef}
        //style={{ scrollbarWidth: "none" }}
      >
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="mr-6 ">
              <img
                className="min-w-48 rounded-lg"
                alt="movie poster"
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              ></img>
            </div>
          );
        })}
      </div>
      <span onClick={scrollInLeft}>
        <img
          src={rightArrow}
          className="w-10 bg-white p-2 rounded-[50%] rotate-180 shadow-2xl absolute top-[8.5rem] md:top-[12rem] left-[0.5rem] border-4 border-[#E63631] cursor-pointer"
          alt="left scroll arrow"
        />
      </span>
      <span onClick={scrollInRight}>
        <img
          src={rightArrow}
          className="w-10 bg-white p-2 rounded-[50%] shadow-2xl absolute border-4 border-[#E63631]  top-[8.5rem] md:top-[12rem] right-[0.5rem] cursor-pointer"
          alt="right scroll arrow"
        />
      </span>
    </div>
  );
};

export default MovieCardsList;
