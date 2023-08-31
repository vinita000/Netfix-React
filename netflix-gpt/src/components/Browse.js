import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import Header from "./Header";

const Browse = () => {
  useNowPlayingMovies();
  return(
    <Header />
  )
};

export default Browse;

// why always api or every thing calling two times, as because due to presence of StrictMode in index.js
// it is calling because react does extra rendering of your componets just check consitence between your calls
