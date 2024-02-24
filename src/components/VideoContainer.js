import React, { useEffect, useState } from 'react'
import { VIDEO_API } from '../utils/constant'
import VideoCard from './VideoCard';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch(VIDEO_API);
    const json = await data.json();
    setVideos(json.items)
  }
  // console.log(videos);
  
  return (
    <div className='flex flex-wrap'>
      {videos.map(video => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  )
}

export default VideoContainer