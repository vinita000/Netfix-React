const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='pt-6 text-lg w-2/4'>{overview}</p>
      <div className='flex space-x-4 mt-6'>
        <button className='flex items-center justify-center bg-white text-black hover:bg-opacity-70 py-3 px-8 text-lg font-semibold rounded-lg'>
          <span className='mr-2'>🤾‍♂️ </span>Play
        </button>
        <button className='flex items-center justify-center bg-gray-800 text-white  hover:bg-opacity-70 py-3 px-8 text-lg font-semibold rounded-lg'>
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;