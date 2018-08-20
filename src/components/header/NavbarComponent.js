import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

function NavbarComponent (){
  return (
    <ul id="nav-ul">
      <li>
        <Link to="/"> Home </Link>
      </li>
      <li>
        <Link to="/wishlist"> Wish List </Link>
      </li>
      <li>
        <Link to="/register"> Register </Link>
      </li>
    </ul>
  )
}

export default NavbarComponent;