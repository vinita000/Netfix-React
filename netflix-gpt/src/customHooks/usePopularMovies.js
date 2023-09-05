import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../components/utils/constants";
import { addPopularMovies } from "../components/utils/moviesSlice";
import { useEffect } from "react";
import Header from "../components/Header";


const usePopularMovies = () => {
  // Fetch data from TMDB aoi and update store
  const dispatch = useDispatch();
  const PopularMovies = useSelector((store) => store.movies.PopularMovies);
  const fetchPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    if (!PopularMovies) {
      fetchPopularMovies();
    }
  }, []);
  return (
    <div>
      <Header />
    </div>
  ); 
}

export default usePopularMovies;