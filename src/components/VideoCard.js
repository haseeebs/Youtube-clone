import React from 'react'
import moment from 'moment';
moment().format();

const VideoCard = ({ info }) => {

    if (!info) return <h1>Loading...</h1>

    const { snippet, statistics } = info;

    const date = moment.duration(info.contentDetails.duration);

    return (
        <div className='w-1/3 p-2 relative select-none'>
            <img src={snippet.thumbnails.medium.url} className='w-full rounded-xl cursor-pointer' alt="video" />
            <div className="px-1.5 py-1 text-sm rounded-md absolute top-44 right-3 bg-black text-white">{`${date._data.minutes}:${date._data.seconds}`}</div>
            <div className="p-5">
                <h2 className='font-bold text-md'>{snippet.title}</h2>
                <h2 className='text-base mt-2'>{snippet.channelTitle}</h2>
                <h2 className='text-base'>{statistics.viewCount} views</h2>
            </div>
        </div>
    )
}

export default VideoCard