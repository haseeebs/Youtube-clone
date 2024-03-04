import React from 'react'

const SearchedVideos = ({ video }) => {
    
    return (
        <div className='flex p-2 w-full gap-5 justify-center'>
            <div className='relative w-2/5'>
                <img src={video.snippet?.thumbnails?.medium?.url} alt="video" className='w-full h-full rounded-xl' />
            </div>
            <div className="w-2/4">
                <h1 className=' font-medium'>{video.snippet?.title}</h1>

                <div className="w-2/4 flex items-center gap-2 mt-3 cursor-pointer">
                    <div className="h-10 w-10 bg-slate-600 rounded-full"></div>
                    <h2 className='font-bold text-sm'>{video.snippet?.channelTitle}</h2>
                </div>

                <div className='mt-3'>
                    <p>{video?.snippet?.description.slice(0, 150)}...</p>
                </div>
            </div>
        </div>
    )
}

export default SearchedVideos