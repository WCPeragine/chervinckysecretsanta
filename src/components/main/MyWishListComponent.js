import React from 'react';
import WishListBackground from './background/WishListBackground';
import './css/wishlist.css';

function MyWishListComponent (){
 return (
 	<div>
 		<WishListBackground/>
 		 <div id="parchment">
 		 	<ul id="wishlist-ul">
 		 		<li className="wishlist-li">
 		 		<label>
 		 			Sample item<br/>
 		 			<a href="">This is a url to amazon</a>
 		 		</label>
 		 		</li>
 		 		<li className="wishlist-li">Sample 2</li>
 		 		<li className="wishlist-li">Sample 3</li>
 		 		<li className="wishlist-li">Sample number 5</li>
 		 	</ul>
 		 </div>
 	</div>
 )
}

export default MyWishListComponent;