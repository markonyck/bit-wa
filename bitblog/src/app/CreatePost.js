import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { postsEndpoint } from '../shared/constants';
import { mySinglePost } from '../services/fetchPosts';

export class CreatePost extends Component {
    constructor() {
        super()
        this.state = {
            id:"",
            inputTitleValue: "",
            inputTextValue: "",
            userId:1
        }
    }

    cancelPost=()=>{
        this.setState({inputTitleValue: "",inputTextValue: ""});
        // const input = document.querySelector('input');
        // input.value = "";
    }

    savePost = () => {
        fetch(postsEndpoint, {
            method: 'POST', 
            body: JSON.stringify(mySinglePost(this.state)), 
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
    }

    render() {
        console.log(this.state.inputTitleValue)
        console.log(this.state.inputTextValue)
        return (
            
            <div className="row">
                <div className="col s12">
                    <h2>NEW POST</h2>
                    <h3>Title</h3>
                    <input type="text" placeholder="Post title" onChange={event => this.setState({inputTitleValue:event.target.value})}/>
                    <h3>Content</h3>
                    <textarea placeholder="multi-line" rows="20" onChange={event => this.setState({inputTextValue:event.target.value})}/>
                    <Link to="/" ><a class="waves-effect red btn" onClick={this.cancelPost}>Cancel</a></Link>
                    <Link to="/" ><a class="waves-effect waves-light btn" onClick={this.savePost}>Save</a></Link>
                </div>
            </div>
        )
    }

}