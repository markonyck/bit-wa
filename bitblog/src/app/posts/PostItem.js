import React, { Component } from "react"


export const PostItem = props => {
    const posts = props.posts;
    
    return (
        posts.map(post => {
          return <div className="col s12" key={post.id}>
           <div className="card">
             <div className="card-content">
               <span className="card-title">{post.title}</span>
               <p>{post.body}</p>
             </div>
           </div>
         </div>
        })
    )
}