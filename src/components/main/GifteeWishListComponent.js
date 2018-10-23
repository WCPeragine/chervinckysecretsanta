import React from "react";
import GifteeWishListBackground from "./background/GifteeWishListBackground";
import WishListCard from "./main-components/WishListCard";
import BuildGifteeList from "./wishlist-components/BuildGifteeList";
import "./css/wishlist.css";

class GifteeWishListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      giftee_id: props.giftee_id,
      listArr: [],
      fetchUrl: props.fetchUrl
    };
  }

  sortList = data => {
    const sortedData = data.sort((a, b) => {
      const nameA = a.gift_rank;
      const nameB = b.gift_rank;
      switch (nameA > nameB) {
        case true:
          return 1;
        case false:
          return -1;
        default:
          return 0;
      }
    });
    this.setState({
      listArr: sortedData
    });
  };

  getList = giftee_id => {
    fetch(String(this.state.fetchUrl) + "wishlist/user", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: giftee_id })
    })
      .then(response => response.json())
      .then(data => {
        this.sortList(data);
      });
  };

  buildList = () => {
    const { listArr } = this.state;
    let listHtml = listArr.map((li, index) => (
      <BuildGifteeList key={index} li={li} index={index} />
    ));
    return listHtml;
  };

  componentDidMount() {
    this.getList(this.props.giftee_id);
    console.log(this.state.giftee_id);
  }

  render() {
    return (
      <div>
        <GifteeWishListBackground />
        <div id="wishlist-container">
          <div> </div>
          <div id="parchment">
            <ul id="wishlist-ul">{this.buildList()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default GifteeWishListComponent;
