import React from 'react';
import WishListBackground from './background/WishListBackground';
import './css/wishlist.css';

function MyWishListComponent (){
 return (
 	<div>
 		<WishListBackground/>
 		 <p className="coming-soon">COMING SOON</p>
 	</div>
 )
}

export default MyWishListComponent;