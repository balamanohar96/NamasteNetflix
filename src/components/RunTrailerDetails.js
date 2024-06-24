import React, { useState } from "react";

const RunTrailerDetails = ({ title, description }) => {
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
    <div className=" absolute  bg-gradient-to-r w-screen aspect-video from-black py-48 px-8 text-white">
      <h2 className=" font-semibold text-4xl">{title}</h2>
      <p className={isMoreActive ? "w-1/2 py-4" : "w-1/3 py-4"}>
        {overview}
        {!isMoreActive && description.length > 190 && "..."}
      </p>
      <button className="rounded-md bg-white text-black px-8 py-2 mr-3 hover:bg-opacity-80">
        Play
      </button>
      {overview.length >= 190 && (
        <button
          className="rounded-md bg-white text-white px-8 py-2 bg-opacity-20 "
          onClick={moreInfoBtnHandler}
        >
          {isMoreActive ? "Show Less" : "More Info"}
        </button>
      )}
    </div>
  );
};

export default RunTrailerDetails;
