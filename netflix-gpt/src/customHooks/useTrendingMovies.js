import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../components/utils/constants";
import { addTrendingMovies } from "../components/utils/moviesSlice";
import { useEffect } from "react";
import Header from "../components/Header";


const useTrendingMovies = () => {
  // Fetch data from TMDB aoi and update store
  const dispatch = useDispatch();
  const fetchTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("Trending", json);
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);
}

export default useTrendingMovies;