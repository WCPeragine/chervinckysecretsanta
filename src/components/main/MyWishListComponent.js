import React from "react";
import WishListBackground from "./background/WishListBackground";
import "./css/wishlist.css";
import NewItemButton from "./wishlist-components/NewItemButton";
import Arrows from "./arrow";

//Needs to be made into separate react component eventually
function BuildListHtml(props) {
  const { li, index, onArrowClick } = props;
  const { gift_rank, gift_link, gift_name, comments } = li;
  const item_comment = `Additional comments: ${comments}`;
  const isLink = gift_link.length;
  if (isLink) {
    return (
      <li className="wishlist-li" data-index={index}>
        <Arrows
          className="arrows"
          onArrowClick={onArrowClick}
          key={index}
          index={index}
        />
        <a
          href={gift_link}
          target="_blank"
          className="giftName"
          data-index={index}
          data-name={gift_name}
          title={item_comment}
        >
          {String(gift_name)}
        </a>
      </li>
    );
  } else {
    return (
      <li className="wishlist-li" data-index={index}>
        <Arrows
          className="arrows"
          onArrowClick={onArrowClick}
          key={index}
          index={index}
        />
        <p
          className="giftName"
          data-index={index}
          data-name={gift_name}
          title={item_comment}
        >
          {String(gift_name)}
        </p>
      </li>
    );
  }
}

class MyWishListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: props.user_id,
      listArr: [],
      fetchUrl: props.fetchUrl
    };
    this.addToList = this.addToList.bind(this);
  }

  onArrowClick = event => {
    const id = event.target.id;
    const index = Number(id.slice(id.length - 1, id.length));
    let direction = "";
    let listArr = this.state.listArr.map(x => x);
    let giftUp;
    let giftDown;
    let response;
    if (id.slice(5, id.length - 1).length === 3) {
      direction = "up";
    } else if (id.slice(5, id.length - 1).length === 6) {
      direction = "down";
    }
    if (direction === "up" && listArr[index].gift_rank > 1) {
      giftUp = listArr[index];
      giftDown = listArr[index - 1];
      listArr[index].gift_rank--;
      listArr[index - 1].gift_rank++;
    } else if (
      direction === "down" &&
      listArr[index].gift_rank < listArr.length
    ) {
      giftUp = listArr[index + 1];
      giftDown = listArr[index];
      listArr[index].gift_rank++;
      listArr[index + 1].gift_rank--;
    }
    if (giftUp !== undefined) {
      this.setDatabaseList(giftUp, giftDown, this.state.user_id, listArr);
    }
  };

  getList = user_id => {
    fetch(String(this.state.fetchUrl) + "wishlist/user", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id })
    })
      .then(response => response.json())
      .then(data => {
        this.sortList(data);
      });
  };

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

  setDatabaseList = (giftUp, giftDown, user_id, listArr) => {
    const maxLength = listArr.length;
    fetch(String(this.state.fetchUrl) + "wishlist/user/rank", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        giftUp,
        giftDown,
        user_id,
        maxLength
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response === "confirmed") {
          this.sortList(listArr);
        }
      });
  };

  addToList = newItem => {
    const { listArr } = this.state;
    const newList = listArr.map(x => x);
    newList.push(newItem);
    this.setState({ listArr: newList });
  };

  buildList = () => {
    const { listArr } = this.state;
    let listHtml = listArr.map((li, index) => (
      <BuildListHtml
        key={index}
        li={li}
        index={index}
        onArrowClick={this.onArrowClick}
      />
    ));
    return listHtml;
  };

  parentReload = () => {
    const { reload } = this.state;
    this.setState({ reload: !reload });
    console.log(this.state.reload);
  };

  componentDidMount() {
    this.getList(this.state.user_id);
  }

  render() {
    return (
      <div>
        <WishListBackground />
        <div id="wishlist-container">
          <div />
          <div id="parchment" data-pressEnter="">
            <ul id="wishlist-ul">
              {this.buildList()}
              <NewItemButton
                user_id={this.state.user_id}
                addToList={this.addToList}
                fetchUrl={this.state.fetchUrl}
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MyWishListComponent;
