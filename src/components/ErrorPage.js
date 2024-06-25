import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>Oops!...</h2>
      <h2>Error {error.status + " page " + error.statusText}. </h2>
    </div>
  );
};

export default ErrorPage;
