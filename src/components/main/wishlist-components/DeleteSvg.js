import React from "react";

function DeleteSvg(props) {
  const { alterSvgPath, index } = props;

  const shadow = `shadow${index}`;
  const shadowUrl = `url(#${shadow})`;
  const shadowOffset = `shadowOffset${index}`;
  const xBody = `xBody${index}`;
  const xBodyTag = `#${xBody}`;
  const shadowOffsetTag = `#${shadowOffset}`;
  const xBodyClick = `xBodyClick${index}`;
  const xBodyClickBegin = `${xBody}.begin`;

  return (
    <div className="deleteWrapper">
      <svg
        viewBox="0 0 500 350"
        className="deleteSvg"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={shadow} x="-500" y="-600" height="100000" width="10000">
            <feOffset
              id={shadowOffset}
              result="offOut"
              in="SourceGraphic"
              dx="-40"
              dy="40"
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
          id={xBody}
          className="deleteSvgBody"
          fill="#ff1a1a"
          onClick={event => alterSvgPath(event)}
          data-current-state="0"
          strokeLineJoin="round"
          filter={shadowUrl}
          d="M225 175
          c0,0, 0,0 -75,125
          c0,0 0,0 50,0
          l50,-90
          c0,0 0,0 50,90
          l50,0
          c0,0 0,0 -75,-125
          l75, -125
          c0,0 0,0 -50,0
          l-50,90
          c0,0 0,0 -50,-90
          c0,0 0,0 -50,0
          l75,125
          c0,0 0,0 0,0
          Z

          m25,150
          c0,0 0,0 0,0
          c0,0 0,0 0,0
          Z"
        />

        {/* <animate
          id={xBodyClick}
          href={xBodyTag}
          attributeName="d"
          from="M225 175
          c0,0, 0,0 -75,125
          c0,0 0,0 50,0
          l50,-90
          c0,0 0,0 50,90
          l50,0
          c0,0 0,0 -75,-125
          l75, -125
          c0,0 0,0 -50,0
          l-50,90
          c0,0 0,0 -50,-90
          c0,0 0,0 -50,0
          l75,125
          c0,0 0,0 0,0

          m25,150
          c0,0 0,0 0,0
          c0,0 0,0 0,0
          Z"
          to="M225 100
          c-30,-65 50,-65 35,0
          c-4,30 -19,50 -40,77
          l0,0
          c-20,30 -10,80 32,62
          l3,-18
          c0,0 -25,0 -16,-20
          l0,0
          c5,-9 5,-9 16,-20
          l0,0
          c110,-75 60,-145 0,-147
          c-20,0 -80,0 -83,50
          l0,0
          c0,18 20,39 53,15

          m15, 154
          c33,0 33,50 0,50
          c-33,0 -33,-50 0,-50
          Z"
          dur="500ms"
          begin="click"
          fill="freeze"
          restart="always"
        /> */}
      </svg>
    </div>
  );
}

export default DeleteSvg;
