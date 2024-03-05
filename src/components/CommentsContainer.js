import React from 'react';
import { commentsData } from '../utils/CommentsData';
import { getRandomProfileColor } from '../utils/liveChatData';

const Comment = ({ comment }) => {

    const profileColor = getRandomProfileColor();
    return (
        <div className="flex gap-4 mt-7" key={comment.id}>
            <div>
                <div className={`h-10 w-10 rounded-full ${profileColor}`}></div>
            </div>

            <div>
                <div>@{comment.username}</div>
                <p>{comment.content}</p>
                {comment.reply?.map((replyComment) => (
                    <Comment comment={replyComment} key={replyComment.id} />
                ))}
            </div>
        </div>
    );
};

const CommentsContainer = () => {
    return (
        <div>
            {commentsData.map((comment) => (
                <Comment comment={comment} key={comment.id} />
            ))}
        </div>
    );
};

export default CommentsContainer;
