import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { VIDEO_LIST, VIDEOS_API } from '../utils/constant';
import SearchedVideos from '../components/SearchedVideos';
import { demoData } from '../utils/demoData';
import { useDispatch } from 'react-redux';
import { openMenu } from '../slices/appSlice';

const SearchScreen = () => {

  const location = useLocation();
  const dispatch = useDispatch();
  const params = new URLSearchParams(location.search);
  const searchText = params.get('q');

  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    fetchData();
    dispatch(openMenu());
  }, [searchText]);

  const fetchData = async () => {
    const data = await fetch(`${VIDEO_LIST}${searchText}`);
    // const data = await fetch(`${VIDEOS_API}`);
    const json = await data.json();
    setVideoData(json.items || demoData);
  }

  if (!videoData) return null;

  return (
    <div className=' w-full'>
      <h1 className='ml-10 font-semibold'>Results for {`${searchText}`}</h1>
      {videoData.map((video) => (
        <Link to={`/watch?v=${video.id.videoId || video.id}`} key={video.id.videoId || video.id}>
          <SearchedVideos video={video} />
        </Link>
      ))}
    </div>
  )
}

export default SearchScreen