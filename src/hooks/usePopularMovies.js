import { useEffect } from "react";
import { OPTIONS, POPULAR_MOVIES_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(POPULAR_MOVIES_API, OPTIONS);
      const json = await response.json();
      dispatch(addPopularMovies(json.results));
    };
    fetchData();
  }, [dispatch]);
};

export default usePopularMovies;
