import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../slices/appSlice';
import { VIDEO_ID_API } from '../utils/constant';
import CommentsContainer from '../components/CommentsContainer';
import LiveChatContainer from '../components/LiveChatContainer';
import { addMessage } from '../slices/liveChatSlice';

const WatchScreen = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const [videoDetails, setVideoDetails] = useState([]);
    const [isExpanded, setExpanded] = useState(false);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        dispatch(closeMenu());
        fetchVideoData();
    }, []);

    const fetchVideoData = async () => {
        try {
            const data = await fetch(`${VIDEO_ID_API}${searchParams.get('v')}`)
            const json = await data.json();
            setVideoDetails(json.items[0])
        } catch (error) {
            console.log('Error fetching video data:', error);
        }

    }

    const toggleExpand = () => {
        setExpanded(!isExpanded);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addMessage({ profileColor: 'bg-gray-800' , username: 'Haseeb developer', content: inputValue }))
        setInputValue('');
    }

    const { title, channelTitle, description } = videoDetails.snippet || {};

    return (
        <div className='flex w-full my-8'>
            <div className="w-2/3 px-16">
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

            <div className="w-1/4 h-[450px] border border-slate-300 rounded-xl">

                <div className="border-b-2 px-6 py-4">
                    <h1>Top chat</h1>
                </div>

                <div className="mt-2">
                    <LiveChatContainer />
                </div>

                <form className="h-[10%]" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Type your message and press Enter'
                        value={inputValue}
                        onChange={event => setInputValue(event.target.value)}
                        className='h-full w-full border border-slate-300 rounded-xl px-5'
                    />
                </form>

            </div>
        </div>
    );
};

export default WatchScreen;