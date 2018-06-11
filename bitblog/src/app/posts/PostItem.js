import React from "react"
import { Link } from 'react-router-dom'


export const PostItem = props => {
  const posts = props.posts;

  return (
    posts.map(post => {
      return <div className="col s12" key={post.id}>
        <div className="card">
          <Link to={`/posts/${post.id}`} >
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </Link>
        </div>
      </div>
    })
  )
}