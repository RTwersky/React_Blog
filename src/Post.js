import React, { useState } from 'react'
import Comments from './Comments';

export default function Post({ post: { id, title, body } }) {
    const [commentsShow, setCommentsShow] = useState(false);


    return (
        <div class='container'>
            <h3 class="row"> {title}</h3>
            <p clas="row">{body}</p>
            <button class="cButton btn btn-info" onClick={() => setCommentsShow(!commentsShow)}>{commentsShow ? 'Hide Comments' : 'Show Comments'}</button>
            <div>
                {commentsShow && <Comments postId={id} />}
            </div>
            <hr />
            

        </div>
    )
}
