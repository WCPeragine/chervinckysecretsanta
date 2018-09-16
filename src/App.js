import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link, // eslint-disable-line
  Switch
} from 'react-router-dom';

import HeaderComponent from './components/header/HeaderComponent';
import HomeComponent from './components/main/HomeComponent';
import MyWishListComponent from './components/main/MyWishListComponent';
import GifteeWishListComponent from './components/main/GifteeWishListComponent';
import RegisterComponent from './components/main/RegisterComponent';
import SignInComponent from './components/main/SignInComponent';
import NotFoundComponent from './components/main/NotFoundComponent';
import FooterComponent from './components/footer/FooterComponent';

import './app.css';


const initialState = {
  isSignedIn: false,
      giftee_name: 'Giftee',
      user:{
        user_id: '',
        name: 'Santa',
        spouse_id: '',
        group_id: '',
        gender: '',
        giftee_id: '',
  }
}



class App extends Component {
  constructor(){
    super();
    this.state = {
      isSignedIn: false,
      giftee_name: '',
      user:{
        user_id: '',
        name: '',
        spouse_id: '',
        group_id: '',
        gender: '',
        giftee_id: '',
  
      }
    }
  }

  getGifteeName = (num) => {
    const namesList = ["Chance", "Stacy", "Mark", "Amy", "Bob", "Polly", "Steve", "Erin"];
    return namesList[num-1]
  }

  loadUser = (data) => {
    if(data){
      const {user_id, name, spouse_id, group_id, gender, giftee_id} = data;
      let giftee_name = this.getGifteeName(giftee_id);
      if(giftee_name === undefined){giftee_name = 'Giftee';}
      this.setState({
        isSignedIn: true,
        signInEmail: '',
        signInPassword: '',
        giftee_name,
        user: {
          user_id,
          spouse_id,
          name,
          group_id,
          gender
      }})
    } else {
      this.setState(this.state)
    }
  }


    onGifteeSelect = (user_id, spouse_id, group_id) => {
      fetch('https://cherv-secret-santa.herokuapp.com/giftee/select', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          user_id,
          spouse_id,
          group_id
        })
      })
      .then(response => response.json())
      .then(data => {
        this.loadUser(data);
      })
    }


  render() {
    const { state, loadUser, onGifteeSelect } = this;
    const { isSignedIn, user, giftee_name  } = state;
    const { user_id, name, spouse_id, group_id, gender, giftee_id } = user;
    fetch('https://cherv-secret-santa.herokuapp.com/', {})

    return (

        <Router>
          <div>
            <HeaderComponent isSignedIn={isSignedIn} name={name} giftee_name={giftee_name}/>

            { isSignedIn
              ?<Switch>
                <Route 
                  exact path='/' 
                  render={(props) => 
                    <HomeComponent {...props} 
                      onGifteeSelect={onGifteeSelect} 
                      user_id={user_id} 
                      spouse_id={spouse_id} 
                      group_id={group_id}
                      giftee_name={giftee_name}
                    />}
                />
                <Route 
                  exact path='/signin' 
                  render={(props) => 
                    <HomeComponent {...props} 
                      onGifteeSelect={onGifteeSelect} 
                      user_id={user_id} 
                      spouse_id={spouse_id} 
                      group_id={group_id}
                      giftee_name={giftee_name}
                    />}
                />
                <Route 
                  exact path='/register' 
                  render={(props) => 
                    <HomeComponent {...props} 
                      onGifteeSelect={onGifteeSelect} 
                      user_id={user_id} 
                      spouse_id={spouse_id} 
                      group_id={group_id}
                      giftee_name={giftee_name}
                    />}
                />
                <Route exact path='/mywishlist' component={MyWishListComponent}/>
                <Route exact path='/gifteewishlist' component={GifteeWishListComponent}/>
                <Route component={NotFoundComponent}/>
              </Switch>
              :<Switch>
                <Route
                  exact path='/'
                  render={(props) => <SignInComponent {...props} loadUser={loadUser} />}
                />
                <Route
                  exact path='/signin'
                  render={(props) => <SignInComponent {...props} loadUser={loadUser} />}
                />
                <Route 
                  exact path='/register' 
                  render={(props) => <RegisterComponent {...props} loadUser={loadUser} />}
                />
                <Route component={NotFoundComponent}/>
              </Switch>
            }
          
            <FooterComponent/>
          </div>
        </Router>
    );
  }
}

export default App;
