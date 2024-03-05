import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../slices/liveChatSlice';
import { getRandomContent, getRandomProfileColor, getRandomUsername } from '../utils/liveChatData';

const Comment = ({ comment }) => {

    return (
        <div className="flex gap-2 p-2" key={comment.id}>
            <div>
                <div className={`h-6 w-6 rounded-full ${comment.profileColor}`}></div>
            </div>

            <div className='text-sm'>
                <span className='mr-2'>{comment.username}</span>
                <span className='font-medium'>{comment.content}</span>
            </div>

        </div>
    )
}

const LiveChatContainer = () => {

    const dispatch = useDispatch();
    const liveMessage = useSelector(store => store.liveChat.messages)

    useEffect(() => {
        const timer = setInterval(() => {
            //Api polling...

            const randomProfileColor = getRandomProfileColor();
            const randomUsername = getRandomUsername();
            const randomContent = getRandomContent();

            dispatch(addMessage({
                profileColor: randomProfileColor,
                username: randomUsername,
                content: randomContent
            }))
        }, 1500)


        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <div className='h-[385px] flex flex-col-reverse overflow-y-scroll'>
            {liveMessage.map((message, index) => (
                <Comment key={index} comment={message} />
            ))}
        </div>
    )
}

export default LiveChatContainer