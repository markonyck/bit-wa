import { postsEndpoint } from "../shared/constants.js"
import { Post } from "../entities/Post.js"


export const fetchPosts = () =>{
    return fetch(postsEndpoint)
        .then(response => {
        return response.json(); 
    }).then((posts) => {
        return myPost(posts)
  })
}


const myPost = (posts) => posts.map (post => {
    const id = post.id
    const title = post.title
    const body = post.body
    const userId = userId;
   
    return new Post (id, title, body, userId);
})

