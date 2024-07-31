import React, { useState } from "react";
import { Link } from "react-router-dom";
import { INFO_ICON, PLAY_ICON } from "../utils/constants";

const RunTrailerDetails = ({ title, description, movieID, rating }) => {
  const [isMoreActive, setIsMoreActive] = useState(false);
  const [overview, setOverview] = useState(description.slice(0, 190));

  const moreInfoBtnHandler = () => {
    setIsMoreActive(!isMoreActive);
    if (isMoreActive) {
      setOverview(description.slice(0, 190));
    } else {
      setOverview(description.slice(0, 1900));
    }
  };
  return (
    <div className=" absolute md:bg-gradient-to-r w-screen aspect-video from-black py-32 md:py-48 px-8 text-white">
      <h2 className=" font-semibold text-xl md:text-4xl">{title}</h2>
      <p
        className={
          isMoreActive
            ? "w-1/2 py-6 hidden md:block"
            : "w-1/3 py-6 hidden md:block"
        }
      >
        {overview}
        {!isMoreActive && description.length > 190 && "..."}
      </p>
      <div className="flex">
        <Link
          to={"/movie/" + movieID}
          state={{
            id: movieID,
            title: title,
            overview: description,
            vote_average: rating,
          }}
        >
          <button className="rounded-md bg-white text-black px-4 mt-7 md:mt-0 md:px-8 md:py-2 flex items-center hover:opacity-80 mr-3 ">
            <img className="w-4 m-2" src={PLAY_ICON} alt="playIcon" />
            Play
          </button>
        </Link>

        {overview.length >= 190 && (
          <div className="hidden md:block">
            <button
              className="rounded-md bg-white text-black px-8 py-2 flex items-center hover:opacity-80 w-44 "
              onClick={moreInfoBtnHandler}
            >
              <img className="w-4 m-2" src={INFO_ICON} alt="infoIcon" />
              {isMoreActive ? "Show Less" : "More Info"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RunTrailerDetails;
