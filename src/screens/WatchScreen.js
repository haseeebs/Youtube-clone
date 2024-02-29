import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../slices/appSlice';

const WatchScreen = () => {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    return (
        <div className='p-6'>
            <iframe
                className='rounded-2xl'
                width="800"
                height="450"
                src={`https://www.youtube.com/embed/${searchParams.get('v')}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default WatchScreen