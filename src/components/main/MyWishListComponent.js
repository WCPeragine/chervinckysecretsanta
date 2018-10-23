import React from "react";
import WishListBackground from "./background/WishListBackground";
import "./css/wishlist.css";
import NewItemButton from "./wishlist-components/NewItemButton";
import BuildListHtml from "./wishlist-components/BuildListHtml";
import DeleteDialog from "./wishlist-components/DeleteDialog";

class MyWishListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: props.user_id,
      listArr: [],
      deleteDialogOpen: false,
      currentItemName: "",
      currentBtn: {},
      fetchUrl: props.fetchUrl
    };
    this.alterList = this.alterList.bind(this);
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

  alterList = (item, operator) => {
    const { listArr } = this.state;
    if (operator === "add") {
      const newList = listArr.map(x => x);
      newList.push(item);
      this.setState({ listArr: newList });
    } else if (operator === "remove") {
      let newList = listArr.map(x => x);
      newList.splice(item.gift_rank - 1, 1);
      this.setState({ listArr: newList });
    }
  };

  onDeleteOrCancel = deleteOrCancel => {
    const { currentItem: item, currentBtn: btn } = this.state;
    let currentState = Number(btn.dataset.currentState);
    switch (deleteOrCancel) {
      case "delete":
        btn.setAttribute(
          "d",
          "M95 210 c0,0 20,-15 120,90 c0,0 0,0 0,0 l0,0 c0,0 -30,-30 160,-175 l0,0 c0,0 -15,-5 1,-75 l0,0 c0,0 0,0 0,0 l0,0 c0,0 -30,-30 -165,175 c0,0 -10,0 -40,-60 l0,0 c0,0 0,0 -75,44 Z m130, 100 c0,0 0,0 0,0 c0,0 0,0 0,0 Z"
        );
        btn.setAttribute("fill", "#04a641");
        this.onItemRemove(item);
        currentState = 0;
        this.setState({
          deleteDialogOpen: false,
          currentItem: {},
          currentItemName: "",
          currentBtn: {}
        });
        break;
      case "cancel":
        btn.setAttribute(
          "d",
          "M225 175 c0,0, 0,0 -75,125 c0,0 0,0 50,0 l50,-90 c0,0 0,0 50,90 l50,0 c0,0 0,0 -75,-125 l75, -125 c0,0 0,0 -50,0 l-50,90 c0,0 0,0 -50,-90 c0,0 0,0 -50,0 l75,125 c0,0 0,0 0,0 Z m25,150 c0,0 0,0 0,0 c0,0 0,0 0,0 Z"
        );
        btn.setAttribute("fill", "#ff1a1a");
        currentState = 0;
        break;
    }
    btn.dataset.currentState = currentState;
  };

  onDeleteDialogResponse = event => {
    const id = String(event.target.id.slice(0, 6));
    this.onDeleteOrCancel(id);
    this.setState({ deleteDialogOpen: false });
  };

  //currentState 0=X 1=? 2=check

  alterSvgPath = event => {
    const btn = event.target;
    const id = event.target.id;
    const gift_rank = Number(id.slice(id.length - 1, id.length)) + 1;
    const selector = `a[data-index='${gift_rank -
      1}'], p[data-index='${gift_rank - 1}']`;
    const elem = document.querySelector(selector);
    const gift_name = elem.dataset.name;
    const item = {
      gift_name: gift_name,
      gift_rank: gift_rank,
      elem: elem
    };
    let currentState = Number(btn.dataset.currentState);
    switch (currentState) {
      case 0:
        btn.setAttribute(
          "d",
          "M225 100 c-30,-65 50,-65 35,0 c-4,30 -19,50 -40,77 l0,0 c-20,30 -10,80 32,62 l3,-18 c0,0 -25,0 -16,-20 l0,0 c5,-9 5,-9 16,-20 l0,0 c110,-75 60,-145 0,-147 c-20,0 -80,0 -83,50 l0,0 c0,18 20,39 53,15 Z m15, 154 c33,0 33,50 0,50 c-33,0 -33,-50 0,-50 Z"
        );
        btn.setAttribute("fill", "#f6f4f3");
        currentState++;
        this.setState({
          deleteDialogOpen: true,
          currentItem: item,
          currentItemName: String(gift_name),
          currentBtn: btn
        });
        break;
    }
    btn.dataset.currentState = currentState;
  };

  itemRemoveWait = (item, alterList, btn) => {
    setTimeout(function() {
      alterList(item, "remove");
      btn.setAttribute(
        "d",
        "M225 175 c0,0, 0,0 -75,125 c0,0 0,0 50,0 l50,-90 c0,0 0,0 50,90 l50,0 c0,0 0,0 -75,-125 l75, -125 c0,0 0,0 -50,0 l-50,90 c0,0 0,0 -50,-90 c0,0 0,0 -50,0 l75,125 c0,0 0,0 0,0 Z m25,150 c0,0 0,0 0,0 c0,0 0,0 0,0 Z"
      );
      btn.setAttribute("fill", "#ff1a1a");
      let currentState = 0;
      btn.dataset.currentState = currentState;
    }, 2000);
  };

  onItemRemove = item => {
    const { state, setState } = this;
    const { user_id, fetchUrl, listArr, currentBtn } = state;
    const { gift_name, gift_rank } = item;
    let confirmationList = listArr.map(x => x);
    confirmationList[gift_rank - 1].gift_name = "Loading";
    this.setState({ listArr: confirmationList });
    fetch(String(fetchUrl) + "wishlist/user/remove", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id,
        gift_name,
        gift_rank
      })
    })
      .then(response => response.json())
      .then(newMsg => {
        if (newMsg === "Wishlist Updated!") {
          confirmationList[gift_rank - 1].gift_name = "Deleted";
          this.setState({ listArr: confirmationList });
          this.itemRemoveWait(item, this.alterList, currentBtn);
        }
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

  buildList = () => {
    const { listArr } = this.state;
    let listHtml = listArr.map((li, index) => (
      <BuildListHtml
        key={index}
        li={li}
        index={index}
        onArrowClick={this.onArrowClick}
        alterSvgPath={this.alterSvgPath}
      />
    ));
    return listHtml;
  };

  componentDidMount() {
    this.getList(this.state.user_id);
  }

  render() {
    const { state, alterList, onDeleteDialogResponse } = this;
    const { user_id, fetchUrl, deleteDialogOpen, currentItemName } = state;
    return (
      <div>
        <WishListBackground />
        <div id="wishlist-container">
          {deleteDialogOpen ? (
            <DeleteDialog
              onDeleteDialogResponse={onDeleteDialogResponse}
              currentItemName={currentItemName}
            />
          ) : (
            <span className="none" />
          )}
          <div />
          <div id="parchment">
            <ul id="wishlist-ul">
              {this.buildList()}
              <NewItemButton
                user_id={this.state.user_id}
                alterList={this.alterList}
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
