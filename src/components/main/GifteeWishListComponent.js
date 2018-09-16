import React from 'react';
import GifteeWishListBackground from './background/GifteeWishListBackground';
import WishListCard from './main-components/WishListCard';
import './css/wishlist.css';

function GifteeWishListComponent (){
 return (
 	<div>
 		<GifteeWishListBackground/>
 		<WishListCard/>
	</div>
 )
}

export default GifteeWishListComponent;