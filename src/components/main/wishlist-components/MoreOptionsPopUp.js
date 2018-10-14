import React from "react";

function MoreOptionsPopUp(props) {
  const {
    msg,
    onCancel,
    onItemSubmit,
    onItemChange,
    onLinkChange,
    onCommentsChange,
    gift_name,
    gift_link,
    comments
  } = props;
  return (
    <div id="moreOptionsContainer">
      <span id="topBottomBorder" />
      <span id="leftRightBorder" />
      <div id="topBar">{String(msg)}</div>
      <label htmlFor="itemName" className="itemLabels">
        Name:
      </label>
      <label htmlFor="itemLink" className="itemLabels">
        Link:
      </label>
      <label htmlFor="itemComment" className="itemLabels">
        Comments:
      </label>
      <input
        type="text"
        id="itemName"
        className="optionsInput"
        name="itemName"
        value={gift_name}
        placeholder="Item Name"
        onChange={onItemChange}
      />
      <input
        type="text"
        id="itemLink"
        className="optionsInput"
        name="itemLink"
        value={gift_link}
        placeholder="Item Link"
        onChange={onLinkChange}
      />
      <textarea
        id="itemComment"
        className="optionsInput"
        name="itemComment"
        value={comments}
        placeholder="Add any additional comments here"
        onChange={onCommentsChange}
        rows="30"
        columns="80"
      />
      <div id="bottomBar">
        <input
          type="button"
          id="cancelItemBtn"
          onClick={onCancel}
          value="Cancel"
        />
        <input
          type="button"
          id="submitItemBtn"
          onClick={onItemSubmit}
          value="Submit New Item"
        />
      </div>
    </div>
  );
}

export default MoreOptionsPopUp;
