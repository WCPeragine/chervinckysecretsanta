import React from 'react';
import WishListBackground from './background/WishListBackground';
import './css/wishlist.css';

function MyWishListComponent (){
 return (
 	<div>
 		<WishListBackground/>
    <div id="parchment">
     <ul id="wishlist-ul">
       <li className="wishlist-li">Sample 1</li>
       <li className="wishlist-li">Sample 2</li>
       <li className="wishlist-li">Sample 3</li>
       <li className="wishlist-li">Sample 4</li>
       <li className="wishlist-li">Sample 5</li>
       <li className="wishlist-li">Sample 6</li>
       <li className="wishlist-li">Sample 7</li>
       <li className="wishlist-li">Sample 8</li>
       <li className="wishlist-li">Sample 9</li>
       <li className="wishlist-li">Sample 10</li>
     </ul>
    </div>
 	</div>
 )
}

export default MyWishListComponent;
