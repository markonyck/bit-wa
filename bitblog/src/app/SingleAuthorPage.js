import React, {Component} from 'react';
import { fetchSingleAuthor } from '../services/fetchAuthors'
import { Link } from "react-router-dom"

export class SingleAuthorPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authors:[]
          }
    }

    componentDidMount = () => {
        const userId = this.props.match.params.id;
        fetchSingleAuthor(userId)
        .then(authors =>{ 
            this.setState({authors:authors.filter(author => author.id == userId)})
        })
    }

    goBack = event => {
        event.preventDefault();
        window.history.back()
    }
    
    render() {
        const author = this.state.authors;
        const postId = localStorage.getItem("previousPage");
        
        if(author.length !== 0) {
            console.log(postId)
        const userId = this.props.match.params.id;
        return (
            <div className="row">
            <div className="col s12">
            <p className="btn-floating btn-medium blue center" onClick={this.goBack}>Back</p>
            <h2 className="header">Single Author</h2>
            <div className="card horizontal">
              <div className="card-image">
                <img src="http://uniqsource.com/wp-content/uploads/2013/05/face-neck-exercises-beautiful-woman.jpg" />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                <p className="card-title">{author[0].name}</p>
                  <p>username: {author[0].username}</p>
                  <p>email: {author[0].email}</p>
                  <p>phone: {author[0].phone}</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="card horizontal">
              <div className="card-stacked">
                <div className="card-content">
                <p className="card-title">Address</p>
                  <p>street: {author[0].address.street}</p>
                  <p>city: {author[0].address.city}</p>
                  <p>zipcode: {author[0].address.zipcode}</p>
                </div>
              </div>
              <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362281.8537978514!2d${author[0].address.geo.lng}!3d${author[0].address.geo.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2sBelgrade!5e0!3m2!1sen!2srs!4v1528810725551`}></iframe>
            </div>
            <div className="card horizontal">
              <div className="card-stacked">
                <div className="card-content">
                <p className="card-title">Company</p>
                  <p>company: {author[0].company.name}</p>
                  <p>slogan: {author[0].company.catchPhrase}</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        )
    }
    return (
        <div className="preloader-wrapper big active ">
      <div className="spinner-layer spinner-blue ">
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