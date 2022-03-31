import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

function Posts() {

    const [posts, setPosts] = useState([]) ;
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data));
    }, [])

  return (
    <div>
        <h1>Posts components</h1>
        {
            posts.map(post => <Link to={`/Posts/${post.id}`}> {post.id} </Link>)
        }
        <Outlet></Outlet>
    </div>
  )
}
export default Posts ;