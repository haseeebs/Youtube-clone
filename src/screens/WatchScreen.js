import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../slices/appSlice';
import { VIDEO_ID_API } from '../utils/constant'

const WatchScreen = () => {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const [videoDetails, setVideoDetails] = useState([]);
    const [isExpanded, setExpanded] = useState(false);

    useEffect(() => {
        dispatch(closeMenu());
        fetchVideoData();
    }, []);

    const fetchVideoData = async () => {
        const data = await fetch(`${VIDEO_ID_API}${searchParams.get('v')}`)
        const json = await data.json();
        setVideoDetails(json.items[0])
    }

    const toggleExpand = () => {
        setExpanded(!isExpanded);
    }

    const { title, channelTitle, description } = videoDetails.snippet || {};

    return (
        <div className='mx-28 my-8 w-[55%]'>
            <iframe
                className='rounded-2xl'
                width="100%"
                height="450"
                src={`https://www.youtube.com/embed/${searchParams.get('v')}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>

            <div>
                <h1 className='font-bold text-xl mt-4'>{title}</h1>
            </div>

            <div className="flex items-center gap-4 mt-3 cursor-pointer">
                <div className="h-10 w-10 bg-slate-600 rounded-full"></div>
                <div className="font-medium">{channelTitle}</div>
            </div>

            <div className="bg-gray-100 mt-3 p-3 rounded-xl text-base">
                <p>
                    {isExpanded ? description : description?.slice(0, 250)}
                    <span onClick={toggleExpand} className='font-medium cursor-pointer'>
                        {isExpanded ? '...less' : '...more'}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default WatchScreen