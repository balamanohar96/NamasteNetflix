import React from "react";
import { SyncLoader } from "react-spinners";

const Shimmer = () => {
  return (
    <div className="text-center mt-24">
      <SyncLoader color="#d60a00" />
    </div>
  );
};

export default Shimmer;
