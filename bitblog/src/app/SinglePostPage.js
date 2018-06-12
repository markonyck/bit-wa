import React, { Component } from 'react';
import { Link } from "react-router-dom"

import { Footer } from "./partials/Footer";
import { Header } from "./partials/Header";
import { Home } from "./Home"
import { About } from "./About";
import { Authors } from "./Authors";
import { fetchPosts, fetchPost, fetchAuthorPosts } from "../services/fetchPosts"
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

  componentWillReceiveProps = (nextProps) => {
    const postId = nextProps.match.params.id;

    fetchPost(postId)
      .then(post => {
        this.setState({ post });
        return post;
      })
      .then(({ userId }) => fetchAuthorPosts(userId))
      .then(allUserPosts => {
        this.setState({ allUserPosts })
      })

    fetchAuthors()
      .then(author => {
        this.setState({ author })
      });
  }

  componentDidMount = () => {
    const postId = this.props.match.params.id;
    localStorage.setItem("previousPage", postId);
    fetchPost(postId)
      .then(post => {
        this.setState({ post });
        return post;
      })
      .then(({ userId }) => fetchAuthorPosts(userId))
      .then(allUserPosts => {
        this.setState({ allUserPosts })
      })

    fetchAuthors()
      .then(author => {
        this.setState({ author })
      });
  }


  getPostAuthorName = () => {
    const userId = this.state.post.userId;
    
    return this.state.author.reduce((name, author) => userId == author.id ? author.name : name, '')
  }
  
  
  
  render() {
    const postId = this.props.match.params.id;
    const userId = this.state.post.userId;
    if (this.state.author.length !== 0) {
      return (
        <div className="row">
          <div className="col s12">
            <div className="card">
              <div className="card-content">
                <p className="btn-floating btn-medium white center"><Link to="/">Back</Link></p>
                <h3 className="center">{this.state.post.title}</h3>
                <h4 className="center"><Link to={`/singleAuthor/${userId}`} >{this.getPostAuthorName()}</Link></h4>
                <p>{this.state.post.body}</p>
                <hr />
                <p>3 more posts from same author</p>
                <ul>
                  {this.state.allUserPosts.slice(-3).map(post => <Link to={`/posts/${post.id}`} ><li>{post.title}</li></Link>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="preloader-wrapper big active center">
      <div className="spinner-layer spinner-blue">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
      </div>
    )

  }


}

export default SinglePostPage;
