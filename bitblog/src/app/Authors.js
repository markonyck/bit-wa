import React, { Component } from "react"
import { fetchAuthors } from "../services/fetchAuthors";
import { fetchPosts } from "../services/fetchPosts"
import { AuthorItem } from "./authors/AuthorItem";

export class Authors extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authors: [],
            posts:[],
           
        }
    }

    loadAuthors = () => {
        fetchAuthors()
            .then(authors => {
                this.setState({ authors }) 
            })
    }

    loadPosts = () => {
        fetchPosts()
        .then(posts => {
          this.setState({posts})
        })
      }

    componentDidMount = () => {
        this.loadAuthors();
        this.loadPosts();
    }

    numOfAuthors = () => {
        return this.state.authors.length;
    }

    

    

    

    render() {
        return (
            <div className="row">
                <h3 className="center-align">AUTHORS {this.numOfAuthors()}</h3>
                <AuthorItem authors={this.state.authors} posts={this.state.posts} />
  </div>
        )
    }

}
