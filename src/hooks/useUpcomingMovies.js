import { useEffect } from "react";
import { OPTIONS, UPCOMING_MOVIES_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(UPCOMING_MOVIES_API, OPTIONS);
      const json = await response.json();
      dispatch(addUpcomingMovies(json.results));
    };
    fetchData();
  }, [dispatch]);
};

export default useUpcomingMovies;
