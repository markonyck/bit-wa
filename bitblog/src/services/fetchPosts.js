import { postsEndpoint, postFromAuthorEndpoint, singlePostEndpoint } from "../shared/constants.js"
import { Post } from "../entities/Post.js"


const fetchPosts = () =>{
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
    const userId = post.userId;
   
    return new Post (id, title, body, userId);
})

const fetchPost = (id) => {
    return fetch(singlePostEndpoint+id)
    .then(response => {
        return response.json(); 
    })

}

export { fetchPosts, fetchPost }

