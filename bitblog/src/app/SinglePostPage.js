import React, { Component } from 'react';
import {Link} from "react-router-dom"

import { Footer } from "./partials/Footer";
import { Header } from "./partials/Header";
import { Home } from "./Home"
import { About } from "./About";
import { Authors } from "./Authors";
import { fetchPosts, fetchPost } from "../services/fetchPosts"
import { fetchAuthors } from "../services/fetchAuthors";


class SinglePostPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      post: {},
      author: [],
      allUserPosts: []
    }
  }

  componentDidMount = () => {
    const postId = this.props.match.params.id;
    fetchPost(postId)
    .then(post => {
     return this.setState({ post })
    });
    fetchAuthors()
    .then(author => {   
     this.setState({author})
    })
  }
  
  
  catchAuthor = () => {
    const postId = this.props.match.params.id;
    let au = this.state.author.filter(author => postId == author.id)
    return au[0].name
  }  
  
  
  
  render() {
    if(this.state.author.length !== 0) {
        return (
          <div className="row">
            <div className="col s12">
              <div className="card">
                <div className="card-content">
                  <p><Link to="/">Back</Link></p>
                  <h3 className="center">{this.state.post.title}</h3>
                  <h4 className="center">{this.catchAuthor()}</h4>
                  <p>{this.state.post.body}</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        );
      }
        return (
          <h1>Loading...</h1>
        )
      
  }


}

export default SinglePostPage;
