import React, {Component} from "react"
import { fetchPosts } from "../services/fetchPosts";
import { PostItem } from "./posts/PostItem";


console.log(fetchPosts());
export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts:[]
    }

  }
  
  loadPosts = () => {
    fetchPosts()
    .then(posts => {
      this.setState({posts})
    })
  }
  
  componentDidMount = () => {
    this.loadPosts();
}


    
    render() {
      return (
      <div className="row">
      <h3 className="center-align">POSTS</h3>
      <PostItem posts={this.state.posts} key={this.state.posts.id}/>)}
    </div>
      )
    }
  
}