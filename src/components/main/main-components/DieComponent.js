import React from 'react';
import './dice.css';

function DieComponent (props){
  const {group_id} = props;
  let giftees = [];

    switch(group_id) {
      case 1:
        giftees.push("Mark", "Amy", "Bob", "Polly", "Steve", "Erin")
        break;
      case 2:
        giftees.push("Chance", "Stacy", "Bob", "Polly", "Steve", "Erin")
        break;
      case 3:
        giftees.push("Chance", "Stacy", "Mark", "Amy", "Steve", "Erin")
        break;
      case 4:
        giftees.push("Chance", "Stacy", "Mark", "Amy", "Bob", "Polly")
        break;
      default:
        giftees = ["Chance", "Stacy", "Mark", "Amy", "Bob", "Polly", "Steve", "Erin"];
    }

    const gifteeInnerHtml = (num) => {
      return String(giftees[num])
    }

 return(
 	<div id="platform">
        <div id="dice">
          <div className="side front">
            <div className="center dieText">{gifteeInnerHtml(0)}</div>
          </div>
          <div className="side front inner"></div>

          <div className="side top">
            <div className="center dieText">{gifteeInnerHtml(1)}</div>
          </div>
          <div className="side top inner"></div>

          <div className="side right">
            <div className="center dieText">{gifteeInnerHtml(2)}</div>
          </div>
          <div className="side right inner"></div>

          <div className="side left">
            <div className="center dieText">{gifteeInnerHtml(3)}</div>
          </div>
          <div className="side left inner"></div>

          <div className="side bottom">
            <div className="center dieText">{gifteeInnerHtml(4)}</div>
          </div>
          <div className="side bottom inner"></div>

          <div className="side back">
            <div className="center dieText">{gifteeInnerHtml(5)}</div>
          </div>
          <div className="side back inner"></div>

          <div className="side cover x"></div>
          <div className="side cover y"></div>
          <div className="side cover z"></div>
        </div>
    </div>
 )
}

export default DieComponent;