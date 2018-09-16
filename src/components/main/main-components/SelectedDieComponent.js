import React from 'react';
import './selected-dice.css';

function SelectedDieComponent (props){
  const {giftee_name} = props;


 return(
 	<div id="platformTwo">
        <div id="diceTwo">
          <div className="side front">
            <div className="center dieText">{String(giftee_name)}</div>
          </div>
          <div className="side front inner"></div>

          <div className="side top">
            <div className="center dieText">{String(giftee_name)}</div>
          </div>
          <div className="side top inner"></div>

          <div className="side right">
            <div className="center dieText">{String(giftee_name)}</div>
          </div>
          <div className="side right inner"></div>

          <div className="side left">
            <div className="center dieText">{String(giftee_name)}</div>
          </div>
          <div className="side left inner"></div>

          <div className="side bottom">
            <div className="center dieText">{String(giftee_name)}</div>
          </div>
          <div className="side bottom inner"></div>

          <div className="side back">
            <div className="center dieText">{String(giftee_name)}</div>
          </div>
          <div className="side back inner"></div>

          <div className="side cover x"></div>
          <div className="side cover y"></div>
          <div className="side cover z"></div>
        </div>
    </div>
 )
}

export default SelectedDieComponent;