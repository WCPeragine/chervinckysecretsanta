import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link, // eslint-disable-line
  Switch
} from 'react-router-dom';

import HeaderComponent from './components/header/HeaderComponent';
import HomeComponent from './components/main/HomeComponent';
import WishListComponent from './components/main/WishListComponent';
import RegisterComponent from './components/main/RegisterComponent';
import NotFoundComponent from './components/main/NotFoundComponent';
import FooterComponent from './components/footer/FooterComponent';

import './app.css';


class App extends Component {
  render() {
    return (

        <Router>
          <div>
            <HeaderComponent/>

            <Switch>
              <Route exact path='/' component={HomeComponent}/>
              <Route exact path='/wishlist' component={WishListComponent}/>
              <Route exact path='/register' component={RegisterComponent}/>
              <Route component={NotFoundComponent}/>
            </Switch>

            <FooterComponent/>
          </div>
        </Router>
    );
  }
}

export default App;
