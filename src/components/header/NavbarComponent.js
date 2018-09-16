import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function NavbarComponent ({isSignedIn, name, giftee_name}){
  if (isSignedIn){
  return (
      <ul id="nav-ul">
        <li className="nav-li">
          <Link to="/"> Home </Link>
        </li>
        <li className="nav-li">
          <Link to="/mywishlist"> {String(name)}'s Wish List </Link>
        </li>
        <li className="nav-li">
          <Link to="/gifteewishlist"> {String(giftee_name)}'s Wish List </Link>
        </li>
      </ul>
  )} else {
    return (
      <ul id="nav-ul">
        <li className="nav-li">
          <Link to="/signin"> Sign In </Link>
        </li>
        <li className="nav-li">
          <Link to="/register"> Register </Link>
        </li>
      </ul>
    )}
}

export default NavbarComponent;