import { useEffect } from "react";
import { MOVIES_API, OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
   
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(MOVIES_API, OPTIONS);
      const data = await response.json();
      dispatch(addMovies(data.results));
    };
    fetchMovie();
  }, [dispatch]);
};

export default useNowPlayingMovies;
