import React from "react";

function Arrows(props) {
  const { onArrowClick, index } = props;

  // making all id names unique by adding the index number to them
  const shadowTop = `shadowTop${index}`;
  const shadowTopUrl = `url(#${shadowTop})`;
  const shadowBottom = `shadowBottom${index}`;
  const shadowBottomUrl = `url(#${shadowBottom})`;
  const shadowTopOffset = `shadowTopOffset${index}`;
  const shadowBottomOffset = `shadowBottomOffset${index}`;
  const arrowTop = `arrowTop${index}`;
  const arrowTopTag = `#${arrowTop}`;
  const shadowTopOffsetTag = `#${shadowTopOffset}`;
  const shadowBottomOffsetTag = `#${shadowBottomOffset}`;
  const arrowBottom = `arrowBottom${index}`;
  const arrowBottomTag = `#${arrowBottom}`;
  const topMouseOver = `topMouseOver${index}`;
  const topMouseOut = `topMouseOut${index}`;
  const bottomMouseOver = `bottomMouseOver${index}`;
  const bottomMouseOut = `bottomMouseOut${index}`;
  const topClick = `topClick${index}`;
  const topClickBegin = `${topClick}.begin`;
  const shadowTopXClick = `shadowTopXClick${index}`;
  const shadowTopYClick = `shadowTopYClick${index}`;
  const bottomClick = `bottomClick${index}`;
  const bottomClickBegin = `${bottomClick}.begin`;
  const shadowBottomXClick = `shadowBottomXClick${index}`;
  const shadowBottomYClick = `shadowBottomYClick${index}`;

  return (
    <svg
      viewBox="0 0 1000 520"
      className="arrowSvg"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id={shadowTop} x="-500" y="-500" height="100000" width="10000">
          <feOffset
            id={shadowTopOffset}
            result="offOut"
            in="SourceGraphic"
            dx="-50"
            dy="50"
          />
          <feColorMatrix
            result="matrixOut"
            in="offOut"
            type="matrix"
            values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"
          />
          <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>

        <filter
          id={shadowBottom}
          x="-500"
          y="-500"
          height="100000"
          width="10000"
        >
          <feOffset
            id={shadowBottomOffset}
            result="offOut"
            in="SourceGraphic"
            dx="-50"
            dy="50"
          />
          <feColorMatrix
            result="matrixOut"
            in="offOut"
            type="matrix"
            values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"
          />
          <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>

      <path
        id={arrowTop}
        className="arrow"
        onClick={event => onArrowClick(event)}
        d="M200 225 h-100 l400 -200 l400 200 h-100 l-300 -50 Z"
        filter={shadowTopUrl}
      />

      <path
        id={arrowBottom}
        className="arrow"
        onClick={event => onArrowClick(event)}
        d="M200 275 h-100 l400 200 l400 -200 h-100 l-300 50 Z"
        filter={shadowBottomUrl}
      />

      <animate
        id={topMouseOver}
        href={arrowTopTag}
        attributeName="stroke-width"
        from="10"
        to="20"
        dur="500ms"
        begin="mouseover"
        fill="freeze"
        restart="whennotactive"
      />
      <animate
        id={topMouseOut}
        href={arrowTopTag}
        attributeName="stroke-width"
        from="20"
        to="10"
        dur="500ms"
        begin="mouseout"
        fill="freeze"
        restart="whennotactive"
      />

      <animate
        id={bottomMouseOver}
        href={arrowBottomTag}
        attributeName="stroke-width"
        from="10"
        to="20"
        dur="500ms"
        begin="mouseover"
        fill="freeze"
        restart="whennotactive"
      />
      <animate
        id={bottomMouseOut}
        href={arrowBottomTag}
        attributeName="stroke-width"
        from="20"
        to="10"
        dur="500ms"
        begin="mouseout"
        fill="freeze"
        restart="whennotactive"
      />

      <animate
        id={topClick}
        href={arrowTopTag}
        attributeName="d"
        from="M200 225 h-100 l400 -200 l400 200 h-100 l-300 -50 Z"
        to="M200 245 h-100 l400 -200 l400 200 h-100 l-300 -100 Z"
        values="M200 225 h-100 l400 -200 l400 200 h-100 l-300 -50 Z;
                 M200 245 h-100 l400 -200 l400 200 h-100 l-300 -100 Z;
                 M200 225 h-100 l400 -200 l400 200 h-100 l-300 -50 Z"
        keyTimes="0; 0.2; 1"
        dur="300ms"
        begin="click"
        fill="remove"
        restart="always"
      />

      <animate
        id={shadowTopXClick}
        href={shadowTopOffsetTag}
        attributeName="dx"
        from="-50"
        to="0"
        values="-50; 0; -50"
        keyTimes="0; 0.2; 1"
        dur="300ms"
        begin={topClickBegin}
        fill="remove"
        restart="always"
      />
      <animate
        id={shadowTopYClick}
        href={shadowTopOffsetTag}
        attributeName="dy"
        from="50"
        to="0"
        values="50; 0; 50"
        keyTimes="0; 0.2; 1"
        dur="300ms"
        begin={topClickBegin}
        fill="remove"
        restart="always"
      />

      <animate
        id={bottomClick}
        href={arrowBottomTag}
        attributeName="d"
        from="M200 275 h-100 l400 200 l400 -200 h-100 l-300 50 Z"
        to="M200 295 h-100 l400 200 l400 -200 h-100 l-300 100 Z"
        values="M200 275 h-100 l400 200 l400 -200 h-100 l-300 50 Z;
                 M200 295 h-100 l400 200 l400 -200 h-100 l-300 100 Z;
                 M200 275 h-100 l400 200 l400 -200 h-100 l-300 50 Z"
        keyTimes="0; 0.2; 1"
        dur="300ms"
        begin="click"
        fill="remove"
        restart="always"
      />

      <animate
        id={shadowBottomXClick}
        href={shadowBottomOffsetTag}
        attributeName="dx"
        from="-50"
        to="0"
        values="-50; 0; -50"
        keyTimes="0; 0.2; 1"
        dur="300ms"
        begin={bottomClickBegin}
        fill="remove"
        restart="always"
      />
      <animate
        id={shadowBottomYClick}
        href={shadowBottomOffsetTag}
        attributeName="dy"
        from="50"
        to="0"
        values="50; 0; 50"
        keyTimes="0; 0.2; 1"
        dur="300ms"
        begin={bottomClickBegin}
        fill="remove"
        restart="always"
      />
    </svg>
  );
}

export default Arrows;
