import React from 'react';
import WishListBackground from './background/WishListBackground';
import './css/wishlist.css';

class MyWishListComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user_id: props.user_id,
      listArr: []
    }
  }

getList = (user_id) => {
  fetch('https://cherv-db.herokuapp.com/wishlist/user', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({user_id})
  })
  .then(response => response.json())
  .then(data => {
      this.setList(data);
  })
}

setList = (data) => {
  this.setState({listArr: data})
  console.log(this.state.listArr)
}

buildListHtml = (li, index) => {
  return (
    <li className="wishlist-li">
    <button type='button' className="editBtn" data-index={index}>Edit</button>
    <a href={li.gift_link} className="giftName" data-index={index}>/{String(li.gift_name)}</a>
    </li>
  )
}

buildList = () => {
  const { listArr } = this.state
  let listHtml = listArr.map((li, index) => {
    return this.buildListHtml(li)
  })
}

render(){
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
}

export default MyWishListComponent;
