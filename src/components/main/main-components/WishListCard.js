import React, { Component } from 'react';
import './card.css';
import ReactTilt from 'react-universal-tilt';

export default class WishListCard extends Component{

 render(){
	return (
		<div id="card-container">
			<ReactTilt 
			options={{
				scale: 1.3,
				speed: 800
			}} className="wl-card">
			 		<img className="gift-img" src="http://www.qygjxz.com/data/out/92/5171375-gift-images.jpeg" alt=""/>
	 		</ReactTilt>

		 	<ReactTilt
			options={{
				reverse: true,
				scale: 1.1,
				speed: 500,
				easing: 'ease',
				'disable-y': true,
				shine: true,
				'shine-opacity': .7
			}} className="wl-card">

		 	</ReactTilt>

		 	<ReactTilt
			options={{
				reverse: true,
				scale: 1.1,
				speed: 800,
				easing: 'ease',
				'disable-y': true,
				shine: true,
				'shine-opacity': .7
			}} className="wl-card">

		 	</ReactTilt>
		</div>
	)
  }
}
