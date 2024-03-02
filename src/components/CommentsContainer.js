import React from 'react';
import { commentsData } from '../utils/CommentsData';

const getRandomColor = () => {
    const letters = '0123465789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Comment = ({ comment }) => {

    const profileColor = getRandomColor();

    return (
        <div className="flex gap-4 mt-7" key={comment.id}>
            <div>
                <div className="h-10 w-10 rounded-full" style={{ backgroundColor: profileColor }}></div>
            </div>

            <div className="">
                <div className="">@{comment.username}</div>
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
