import React from 'react';
import DiceComponent from './main-components/DiceComponent';
import HomeBackground from './background/HomeBackground';


function HomeComponent (props){
	const {onGifteeSelect, user, roll, giftee_name} = props;

 return (
 	<div>
	 	<HomeBackground/>
	 	<DiceComponent 
	 		onGifteeSelect={onGifteeSelect}
	 		giftee_name={giftee_name}
	 		user={user}
	 		roll={roll}
	 	/>
 	</div>
 )
}

export default HomeComponent;