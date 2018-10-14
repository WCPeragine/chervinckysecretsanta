import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link, // eslint-disable-line
  Switch
} from "react-router-dom";

import HeaderComponent from "./components/header/HeaderComponent";
import HomeComponent from "./components/main/HomeComponent";
import MyWishListComponent from "./components/main/MyWishListComponent";
import GifteeWishListComponent from "./components/main/GifteeWishListComponent";
import RegisterComponent from "./components/main/RegisterComponent";
import SignInComponent from "./components/main/SignInComponent";
import NotFoundComponent from "./components/main/NotFoundComponent";
import FooterComponent from "./components/footer/FooterComponent";

import "./app.css";

//fetchUrl: "https://cherv-db.herokuapp.com/" = test database
//fetchUrl: "https://cherv-secret-santa.herokuapp.com/" = master database

class App extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false,
      giftee_name: "Giftee",
      roll: true,
      fetchUrl: "https://cherv-db.herokuapp.com/",
      user: {
        user_id: "1",
        name: "Chance",
        spouse_id: "2",
        group_id: "1",
        gender: "male",
        giftee_id: ""
      }
    };
  }

  getGifteeName = num => {
    const namesList = [
      "Chance",
      "Stacy",
      "Mark",
      "Amy",
      "Bob",
      "Polly",
      "Steve",
      "Erin"
    ];
    return namesList[num - 1];
  };

  loadUser = data => {
    if (data) {
      const { user_id, name, spouse_id, group_id, gender, giftee_id } = data;
      let giftee_name = this.getGifteeName(giftee_id);
      let roll = false;
      if (giftee_name === undefined) {
        giftee_name = "Giftee";
        roll = true;
      }
      this.setState({
        isSignedIn: true,
        signInEmail: "",
        signInPassword: "",
        giftee_name,
        roll,
        user: {
          user_id,
          spouse_id,
          name,
          group_id,
          gender
        }
      });
    }
  };

  loadUserGifteeSelect = data => {
    if (data) {
      const { user_id, name, spouse_id, group_id, gender, giftee_id } = data;
      let giftee_name = this.getGifteeName(giftee_id);
      if (giftee_name === undefined) {
        giftee_name = "Giftee";
      }
      this.setState({
        isSignedIn: true,
        signInEmail: "",
        signInPassword: "",
        giftee_name,
        user: {
          user_id,
          spouse_id,
          name,
          group_id,
          gender
        }
      });
    }
  };

  onGifteeSelect = (user_id, spouse_id, group_id) => {
    fetch(String(this.state.fetchUrl) + "giftee/select", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id,
        spouse_id,
        group_id
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data !== "Unable to update") {
          this.loadUserGifteeSelect(data);
        }
      });
  };

  render() {
    const { state, loadUser, onGifteeSelect } = this;
    const { isSignedIn, user, giftee_name, roll, fetchUrl } = state;
    const { user_id, name, spouse_id, group_id, gender, giftee_id } = user;
    fetch(String(this.state.fetchUrl), {});

    return (
      <Router>
        <div>
          <HeaderComponent
            isSignedIn={isSignedIn}
            name={name}
            giftee_name={giftee_name}
          />

          {isSignedIn ? (
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <HomeComponent
                    {...props}
                    onGifteeSelect={onGifteeSelect}
                    giftee_name={giftee_name}
                    fetchUrl={fetchUrl}
                    user={user}
                    roll={roll}
                  />
                )}
              />
              <Route
                exact
                path="/signin"
                render={props => (
                  <HomeComponent
                    {...props}
                    onGifteeSelect={onGifteeSelect}
                    giftee_name={giftee_name}
                    fetchUrl={fetchUrl}
                    user={user}
                    roll={roll}
                  />
                )}
              />
              <Route
                exact
                path="/register"
                render={props => (
                  <HomeComponent
                    {...props}
                    onGifteeSelect={onGifteeSelect}
                    giftee_name={giftee_name}
                    fetchUrl={fetchUrl}
                    user={user}
                    roll={roll}
                  />
                )}
              />
              <Route
                exact
                path="/mywishlist"
                render={props => (
                  <MyWishListComponent
                    {...props}
                    user_id={user_id}
                    fetchUrl={fetchUrl}
                  />
                )}
              />
              <Route
                exact
                path="/gifteewishlist"
                component={GifteeWishListComponent}
                fetchUrl={fetchUrl}
              />
              <Route component={NotFoundComponent} />
            </Switch>
          ) : (
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <SignInComponent
                    {...props}
                    loadUser={loadUser}
                    fetchUrl={fetchUrl}
                  />
                )}
              />
              <Route
                exact
                path="/signin"
                render={props => (
                  <SignInComponent
                    {...props}
                    loadUser={loadUser}
                    fetchUrl={fetchUrl}
                  />
                )}
              />
              <Route
                exact
                path="/register"
                render={props => (
                  <RegisterComponent
                    {...props}
                    loadUser={loadUser}
                    fetchUrl={fetchUrl}
                  />
                )}
              />
              <Route component={NotFoundComponent} />
            </Switch>
          )}

          <FooterComponent />
        </div>
      </Router>
    );
  }
}

export default App;
