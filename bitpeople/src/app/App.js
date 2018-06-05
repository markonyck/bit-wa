import React, { Component } from 'react';
import './App.css';
import { Header } from "./partials/Header";

// import { UsersList } from "./users/UsersList"
import { UsersCard } from "./users/UsersCard"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/*<UsersList  />*/}
        <UsersCard />
      </React.Fragment>
    );
  }
}

export default App;
