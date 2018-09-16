import React from 'react';
import GifteeWishListBackground from './background/GifteeWishListBackground';
import WishListCard from './main-components/WishListCard';
import './css/wishlist.css';

function GifteeWishListComponent (){
 return (
 	<div>
 		<GifteeWishListBackground/>
 		<p className="coming-soon">COMING SOON</p>
	</div>
 )
}

export default GifteeWishListComponent;