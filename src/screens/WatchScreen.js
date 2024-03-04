import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../slices/appSlice';
import { VIDEO_ID_API } from '../utils/constant';
import CommentsContainer from '../components/CommentsContainer';

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

        if (json.error && json.error.code) {
            console.error('Error fetching video data:', json.error.message);
            return;
        }
        
        setVideoDetails(json.items[0])
    }

    const toggleExpand = () => {
        setExpanded(!isExpanded);
    };

    const { title, channelTitle, description } = videoDetails.snippet || {};

    return (
        <div className="mx-28 my-8 w-full md:w-[55%]">
            <iframe
                className="rounded-2xl"
                width="100%"
                height="450"
                src={`https://www.youtube.com/embed/${searchParams.get('v')}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>

            <div className="mt-4">
                <h1 className="font-bold text-2xl">{title || "Video Title Not Available"}</h1>

                <div className="flex items-center gap-4 mt-2 text-gray-600">
                    <div className="h-8 w-8 bg-slate-600 rounded-full"></div>
                    <div className="font-medium">{channelTitle || 'Unknown Channel'}</div>
                </div>

                <div className="bg-gray-100 mt-3 p-3 rounded-xl text-base">
                    <p>
                        {isExpanded ? description : `${description?.slice(0, 250)}...`}
                        <span onClick={toggleExpand} className="font-medium text-blue-500 cursor-pointer">
                            {isExpanded ? ' Read less' : ' Read more'}
                        </span>
                    </p>
                </div>

                <div className="mt-4">
                    <h1 className="font-bold text-2xl">451 Comments</h1>
                    <CommentsContainer />
                </div>
            </div>
        </div>
    );
};

export default WatchScreen;