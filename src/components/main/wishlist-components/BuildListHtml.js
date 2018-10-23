import React from "react";
import Arrows from "./Arrow";
import DeleteSvg from "./DeleteSvg";

function BuildListHtml(props) {
  const { li, index, onArrowClick, alterSvgPath } = props;
  const { gift_rank, gift_link, gift_name, comments } = li;
  const item_comment = `Additional comments: ${comments}`;
  const isLink = gift_link.length;
  const dKey = `delete${index}`;
  const aKey = `arrow${index}`;
  if (isLink) {
    return (
      <li className="wishlist-li" data-index={index}>
        <DeleteSvg
          className="deleteBtn"
          alterSvgPath={alterSvgPath}
          key={dKey}
          index={index}
        />
        <Arrows
          className="arrows"
          onArrowClick={onArrowClick}
          key={aKey}
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
        <DeleteSvg
          className="deleteBtn"
          alterSvgPath={alterSvgPath}
          key={dKey}
          index={index}
        />
        <Arrows
          className="arrows"
          onArrowClick={onArrowClick}
          key={aKey}
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

export default BuildListHtml;
