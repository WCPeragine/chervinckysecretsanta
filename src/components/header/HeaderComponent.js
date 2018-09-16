import React from 'react';
import NavbarComponent from './NavbarComponent';
import './header.css';

function HeaderComponent ({isSignedIn, name, giftee_name}){
	return (	
	 	<header id="header">
	 		<h1>The Chervincky's Secret Santa Site</h1>
			<NavbarComponent isSignedIn={isSignedIn} name={name} giftee_name={giftee_name}/>
	 	</header>
 	)
}

export default HeaderComponent;