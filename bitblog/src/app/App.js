import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';
import { Footer } from "./partials/Footer";
import { Header } from "./partials/Header";
import { Home } from "./Home"
import { About } from "./About";


class App extends Component {
  render() {
    return (
      <React.Fragment>
       
        <Header  />
       <Switch>
          <Route exact path='/' render={()=> <Home />} />
          <Route exact path='/about' render={()=> <About />} />
        </Switch> 
      <Footer />
     
      </React.Fragment>
    );
  }


}

export default App;
