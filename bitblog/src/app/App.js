import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';
import { Footer } from "./partials/Footer";
import { Header } from "./partials/Header";
import { Home } from "./Home"
import { About } from "./About";
import { Authors } from "./Authors";
import { fetchPosts } from "../services/fetchPosts"


class App extends Component {
  render() {
    return (
      <React.Fragment>

        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/authors' component={Authors} />
          <Route exact path='/about' component={About} />
        </Switch>
        <Footer />

      </React.Fragment>
    );
  }


}

export default App;
