import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from './Header';
import Post from './Post';


export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState();
    const { blogId } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const r = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${blogId}`);
                if (!r.ok) {
                    throw new Error(`${r.status} ${r.statuseText || 'Failed to Load'}`)
                }
                const posts = await r.json();
                setPosts(posts);
                setError(null);
            } catch (e) {
                console.error(e);
                setError(e.message);
            }
        })();
    }, [blogId]);

    if (error) {
        return <h2>{error}</h2>
    };


    return (
        <>
            <Header/>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </>
    );
}
