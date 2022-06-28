import React, { useState, useEffect } from 'react'
import BlogInfo from './BlogInfo';
import Header from './Header';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statuseText || 'Failed to Load'}`)
        }
        const blogs = await r.json();
        setBlogs(blogs);
        setError(null);
      } catch (e) {
        console.error(e);
        setError(e.message);
      }
    })();
  }, []);

  if (error) {
    return <h2>{error}</h2>
  }


  return (
    <>
      <Header/>
      {blogs.map(blog => (
        <BlogInfo key={blog.id} blog={blog} />
      ))}
    </>
  );
}