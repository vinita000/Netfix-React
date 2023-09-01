import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../components/utils/constants";
import { addUpcomingMovies } from "../components/utils/moviesSlice";
import { useEffect } from "react";
import Header from "../components/Header";


const useUpcomingMovies = () => {
  // Fetch data from TMDB aoi and update store
  const dispatch = useDispatch();
  const fetchUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    fetchUpcomingMovies();
  }, []);
}

export default useUpcomingMovies;