import { useEffect } from "react";
import { OPTIONS, TOP_RATED_MOVIES_API} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(TOP_RATED_MOVIES_API, OPTIONS);
      const json = await response.json();
      dispatch(addTopRatedMovies(json.results));
    };
    fetchData();
  }, [dispatch]);
};

export default useTopRatedMovies;