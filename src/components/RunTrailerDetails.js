import React from "react";

const RunTrailerDetails = ({ title, description }) => {
  return (
    <div className="z-20 absolute  bg-gradient-to-r w-screen aspect-video from-black py-40 px-8 ">
      <h2 className="text-white font-semibold text-4xl">{title}</h2>
      <p className="w-1/3 py-4">{description}</p>
      <button className="rounded-md bg-white text-black px-8 py-2 mr-3 hover:bg-opacity-80">Play</button>
      <button className="rounded-md bg-white text-white px-8 py-2 bg-opacity-20">More Info</button>
    </div>
  );
};

export default RunTrailerDetails;
