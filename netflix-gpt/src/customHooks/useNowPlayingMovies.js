import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../components/utils/constants";
import { addNowPlayingMovies } from "../components/utils/moviesSlice";
import { useEffect } from "react";
import Header from "../components/Header";


const useNowPlayingMovies = () => {
  // Fetch data from TMDB aoi and update store
  const dispatch = useDispatch();
  const fetchNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);
  return (
    <div>
      <Header />
    </div>
  ); 
}

export default useNowPlayingMovies;