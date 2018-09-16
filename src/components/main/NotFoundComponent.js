import React from 'react';
import HomeBackground from './background/HomeBackground';
import './css/main.css';
import CandyCane from './candy-cane-4.svg';

function NotFoundComponent (){
 return (
 	<div id="not-found-component">
 		<HomeBackground/>
 		<div id="not-found-div">
				<div id="not-found">
					<img id="candy-cane" src={CandyCane} alt=""/>
					<span id="oh-no">OH NO! We couldn't find that webpage</span>
					<img id="candy-cane" src={CandyCane} alt=""/>
				</div>
		</div>
	</div>
 )
}

export default NotFoundComponent;