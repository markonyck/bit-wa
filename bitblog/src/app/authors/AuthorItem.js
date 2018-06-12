import React from "react"
import { Link } from 'react-router-dom'

const numOfPosts = (author, posts) => {
    return posts.filter(post => author.id === post.userId).length;
}

export const AuthorItem = props => {
    const { authors, posts } = props;
    
    return (
        authors.map(author => {
          return <div className="col s12" key={author.id}>
           <div className="card">
           <Link to={`/singleAuthor/${author.id}`} >
             <div className="card-content">
               <span className="card-title">{author.name} ({numOfPosts(author, posts)} - posts)</span>
             </div>
             </Link>
           </div>
         </div>
        })
    )
}