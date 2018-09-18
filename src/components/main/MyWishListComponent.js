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
         <button type='button' className="editBtn">Edit</button>
         <a href="" className="giftName">Sample 1</a>
       </li>
       <li className="wishlist-li">
         <button type='button' className="editBtn">Edit</button>
         <a href="" className="giftName">Sample 2</a>
       </li>
       <li className="wishlist-li">
         <button type='button' className="editBtn">Edit</button>
         <a href="" className="giftName">Sample 3</a>
       </li>
       <li className="wishlist-li">
         <button type='button' className="editBtn">Edit</button>
         <a href="" className="giftName">Sample 4</a>
       </li>
       <li className="wishlist-li">
         <button type='button' className="editBtn">Edit</button>
         <a href="" className="giftName">Sample 5</a>
       </li>
     </ul>
    </div>
 	</div>
 )
}

export default MyWishListComponent;
