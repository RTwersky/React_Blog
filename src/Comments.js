import React, { useEffect, useState } from 'react';
import Comment from './Comment' ;

export default function Comments({ postId }) {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            try {
                const r = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
                if (!r.ok) {
                    throw new Error(`${r.status} ${r.statuseText || 'Failed to Load'}`)
                }
                const comments = await r.json();
                setComments(comments);
                setError(null);
            } catch (e) {
                console.error(e);
                setError(e.message);
            }
        })();
    }, [postId]);

    if (error) {
        return <h2>{error}</h2>
    }


    return (
        <>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </>
    )
}
