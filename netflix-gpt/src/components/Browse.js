import { useSelector } from "react-redux";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTrendingMovies from "../customHooks/useTrendingMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <div>
       <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>

    /**
     * Maincontainer
        - VideoBackground
        -VideoTitle
      SecondaryConatiner
        - MovieList
          - Cards * n

     */
  );
};

export default Browse;

// why always api or every thing calling two times, as because due to presence of StrictMode in index.js
// it is calling because react does extra rendering of your componets just check consitence between your calls
