import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector(store=>store.movies?.nowPlayingMovies);
  if(!movies) return; //Early return

  // const randomId = Math.floor(Math.random() * movies.length);
  // const mainMovies = movies[randomId];
  // console.log("mainMovies", mainMovies);
  // console.log("id", mainMovies.id);
  const mainMovies = movies[1]
  const { original_title, overview, id } = mainMovies
  return (
    <div className='md:pt-0 pt-[30%] bg-black'>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movie_id={id}/>
    </div>
  )
}

export default MainContainer;
