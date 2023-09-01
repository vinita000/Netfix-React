import { useSelector } from 'react-redux'
import useTrailerVideo from '../customHooks/useTrailerVideo';

const VideoBackground = ({movie_id}) => {
  const trailer = useSelector(store=>store?.movies?.trailerVideo)
  useTrailerVideo(movie_id);
  return (
    <div className='w-screen'>
      <iframe
        className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
}

export default VideoBackground
