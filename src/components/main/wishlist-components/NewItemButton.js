import React from "react";
import MoreOptionsPopUp from "./MoreOptionsPopUp";

class NewItemButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: props.user_id,
      giftLength: props.giftLength,
      isBtn: true,
      msg: "What gift do you want?",
      gift_name: "",
      gift_link: "",
      comments: "",
      isMoreOptions: false,
      fetchUrl: props.fetchUrl
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.onFakeBtnFocusOut = this.onFakeBtnFocusOut.bind(this);
  }

  handleKeyDown = event => {
    switch (event.key) {
      case "Enter":
        this.onItemSubmit();
        break;
      case "Escape":
        this.onFakeBtnFocusOutEsc();
        break;
      default:
        break;
    }
  };

  onItemChange = event => {
    this.setState({ gift_name: event.target.value });
  };

  onLinkChange = event => {
    this.setState({ gift_link: event.target.value });
  };

  onCommentsChange = event => {
    this.setState({ comments: event.target.value });
  };

  onFakeBtnClick = event => {
    const { isBtn, gift_name } = this.state;
    const fakeBtn = event.target;
    if (isBtn) {
      fakeBtn.classList.add("notFakeBtn");
      fakeBtn.setAttribute("placeholder", "");
      root.style.setProperty("--pressEnter", "'Press Enter to Submit'");
      root.style.setProperty("--pressEnterSize", "3rem");
    }
    if (fakeBtn.value === "Add an Item") {
      fakeBtn.value = gift_name;
    }
    this.setState({ isBtn: false });
    document.addEventListener("click", this.onFakeBtnFocusOut);
  };

  onFakeBtnFocusOutEsc = event => {
    const { isBtn, gift_name } = this.state;
    const elem = document.getElementById("fakeBtn");
    elem.classList.remove("notFakeBtn");
    elem.value = "Add an Item";
    root.style.setProperty("--pressEnter", "''");
    root.style.setProperty("--pressEnterSize", ".5rem");
    this.setState({ isBtn: true });
    document.removeEventListener("click", this.onFakeBtnFocusOut);
  };

  onFakeBtnFocusOut = event => {
    const { isBtn, gift_name } = this.state;
    const elem = document.getElementById("fakeBtn");
    const target = event.target;
    if (elem !== target) {
      elem.classList.remove("notFakeBtn");
      elem.value = "Add an Item";
      root.style.setProperty("--pressEnter", "''");
      root.style.setProperty("--pressEnterSize", ".5rem");
      this.setState({ isBtn: true });
      document.removeEventListener("click", this.onFakeBtnFocusOut);
    }
  };

  onMoreOptionsClick = event => {
    this.setState({ isMoreOptions: true });
  };

  onItemSubmit = event => {
    const { gift_name, gift_link, comments, user_id, fetchUrl } = this.state;
    const giftLength = document.getElementsByClassName("giftName").length;
    const item = {
      gift_name: gift_name,
      gift_link: gift_link,
      comments: comments,
      gift_rank: giftLength + 1
    };
    if (gift_name.length) {
      this.setState({ msg: "Loading" });
      fetch(String(fetchUrl) + "wishlist/user/add", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          user_id,
          giftLength,
          gift_name,
          gift_link,
          comments
        })
      })
        .then(response => response.json())
        .then(newMsg => {
          this.setState({ msg: newMsg });
          this.props.alterList(item, "add");
        })
        .then(() => {
          this.setState({
            isBtn: true,
            msg: "What gift do you want?",
            gift_name: "",
            gift_link: "",
            comments: "",
            isMoreOptions: false
          });
          const elem = document.getElementById("fakeBtn");
          elem.classList.remove("notFakeBtn");
          elem.value = "Add an Item";
          root.style.setProperty("--pressEnter", "''");
          document.removeEventListener("click", this.onFakeBtnFocusOut);
        });
    }
  };

  onCancel = event => {
    this.setState({
      isBtn: true,
      msg: "What gift do you want?",
      isMoreOptions: false
    });
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("click", this.onFakeBtnFocusOut);
  }

  render() {
    const {
      state,
      onCancel,
      onItemSubmit,
      onMoreOptionsClick,
      onItemChange,
      onLinkChange,
      onCommentsChange,
      onFakeBtnClick
    } = this;
    const { msg, isMoreOptions, gift_name, gift_link, comments } = state;
    return (
      <div id="newItemContainer">
        {isMoreOptions ? (
          <MoreOptionsPopUp
            msg={msg}
            onCancel={onCancel}
            onItemSubmit={onItemSubmit}
            onItemChange={onItemChange}
            onLinkChange={onLinkChange}
            onCommentsChange={onCommentsChange}
            gift_name={gift_name}
            gift_link={gift_link}
            comments={comments}
          />
        ) : (
          <span className="none" />
        )}
        <span className="advancedBtnContainer">
          <input
            type="button"
            className="advancedBtn"
            value="Options"
            onClick={onMoreOptionsClick}
          />
        </span>
        <span className="fakeBtnContainer">
          <input
            type="text"
            placeholder="Add An Item"
            id="fakeBtn"
            className="fakeBtn"
            onChange={onItemChange}
            onClick={onFakeBtnClick}
          />
        </span>
      </div>
    );
  }
}

export default NewItemButton;
