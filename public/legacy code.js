// /* <button type='button' className="editBtn" data-index={props.index}>Edit</button> */
//
// // function Item(props) {
// //   return <li>{props.message}</li>;
// // }
//
// // function TodoList() {
// //   const todos = ['finish doc', 'submit pr', 'nag dan to review'];
// //   return (
// //     <ul>
// //
// // {todos.map((message) => <Item key={message} message={message} />)}
// //     </ul>
// //
//
//
// function Hearts(props){
//   const { gift_rank, index, onClickRating } = props;
//   let starArr = [0, 0, 0];
//   for (let j = 0; j < gift_rank; j++){
//     starArr.unshift(1)
//   }
//   for (let i = 3; i < starArr.length;){
//     starArr.pop()
//   }
//   let ratingArr = starArr.map((star, starIndex) =>  {
//     if(star === 0){
//       return (<img
//         className="unfilled-star star"
//         src="unfilled-star.svg"
//         onClick={(event) => onClickRating(event)}
//         key={starIndex}
//         data-index={index}
//         data-star-index={starIndex}
//         alt=""
//       ></img>)
//     } else {
//       return (<img
//         className="filled-star star"
//         src="filled-star.svg"
//         onClick={(event) => onClickRating(event)}
//         key={starIndex}
//         data-index={index}
//         data-star-index={starIndex}
//         alt=""
//       ></img>)
//     }
//   })
//   return <span className="heartDiv" data-index={index}>{ratingArr}</span>
// }
//
// function Arrows (props){
//   const { index, onArrowClick } = props;
//   return
//       <img
//         className="arrows"
//         src="arrow.svg"
//         onClick={(event) => onArrowClick(event)}
//         key={index}
//         data-index={index}
//         alt=""
//       ></img>
// }


  // onClickRating = (event) => {
  //   const { user_id } = this.state
  //   const elem = event.target;
  //   const rating = Number(elem.dataset.starIndex) + 1
  //   const index = Number(elem.dataset.index)
  //   const gift_name = document.getElementsByClassName('giftName')[index].dataset.name
  //   fetch('https://cherv-db.herokuapp.com/wishlist/user/rating', {
  //     method: 'post',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({user_id, gift_name, rating})
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //       this.setList(data);
  //   })
  // }
