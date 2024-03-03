import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { VIDEO_LIST } from '../utils/constant';

const SearchScreen = () => {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchText = params.get('q');

  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [searchText]);

  const fetchData = async () => {
    const data = await fetch(`${VIDEO_LIST}${searchText}`);
    const json = await data.json();
    setVideoData(json.items);
  }

  if (!videoData) return null;

  return (
    <div>
      {videoData.map((video) => (
        <div key={video.id.videoId} className='flex p-2 w-full border border-black'>
          <img src={video.snippet?.thumbnails?.medium?.url} alt="video" className='w-1/3 rounded-xl' />
          <div className="w-2/3">
            <h1 className='ml-5'>{video.snippet?.title}</h1>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SearchScreen