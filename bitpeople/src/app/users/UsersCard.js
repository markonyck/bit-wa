import React, { Component } from "react"
import { SinglePhotoUser } from "./SinglePhotoUser"
import { fetchUsers } from "../../services/fetchUsers";

export class UsersCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetchUsers()
            .then(users => {
                this.setState({
                    users: users
                   
                })
            })
    }
    render() {
        const { users } = this.state;
        return (
            <div className="row">
               
                    {users.map((user, index) => {
                        return <SinglePhotoUser myUser={user} key = {index}/>
                    })}
               
            </div>

        )
    }

}



