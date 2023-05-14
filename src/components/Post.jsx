import React from 'react'
import { Link } from 'react-router-dom'

function Post ({ post, hideuser }) {
  return (
    <Link className='post-component' to={`/post/${post.id}`}>
      <article>
        <div className='post-image'>
          <img src={post.image} alt={post.title} />
        </div>
        <div className='post-summary'>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          {!hideuser && <div className='post-user'>
            <img src={post.user.avatar} alt={post.user.name} />
            <small>{post.user.username}</small>
          </div>}
        </div>
      </article>
    </Link>
  )
}

export default Post
