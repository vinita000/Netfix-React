import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  console.log("movies",movies)
  return movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='md:-mt-52 mt:0 pl-4 md:pl-12 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={movies?.trendingMovies}/>
        <MovieList title={"Popular"} movies={movies?.popularMovies}/>
        <MovieList title={"UpComing Movies"} movies={movies?.upcomingMovies}/>
        <MovieList title={"Horror Movies"} movies={movies?.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;
