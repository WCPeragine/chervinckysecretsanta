import React from 'react';
import DiceComponent from './main-components/DiceComponent';
import HomeBackground from './background/HomeBackground';


function HomeComponent (props){
	const {onGifteeSelect, user_id, spouse_id, group_id, giftee_name} = props;

 return (
 	<div>
	 	<HomeBackground/>
	 	<DiceComponent 
	 		onGifteeSelect={onGifteeSelect} 
	 		user_id={user_id} 
	 		spouse_id={spouse_id} 
	 		group_id={group_id} 
	 		giftee_name={giftee_name}
	 	/>
 	</div>
 )
}

export default HomeComponent;