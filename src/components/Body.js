import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Movie from "./Movie";
import ErrorPage from "./ErrorPage";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/browse",
      element: [<Browse />],
    },
    {
      path: "/movie/:movieID",
      element: <Movie />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Body;
