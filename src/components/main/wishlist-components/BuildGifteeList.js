import React from "react";

function BuildListHtml(props) {
  const { li, index, onArrowClick, alterSvgPath } = props;
  const { gift_rank, gift_link, gift_name, comments } = li;
  const item_comment = `Additional comments: ${comments}`;
  const isLink = gift_link.length;
  if (isLink) {
    return (
      <li className="wishlist-li" data-index={index}>
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

export default BuildListHtml;
