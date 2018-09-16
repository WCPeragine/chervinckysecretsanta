import React from 'react';
import SelectedDieComponent from './SelectedDieComponent';
import DieComponent from './DieComponent';
import './dice.css';

function DiceComponent(props){

  const {onGifteeSelect, user_id, spouse_id, group_id, giftee_name} = props;

  let fullGiftees = ["Chance", "Stacy", "Mark", "Amy", "Bob", "Polly", "Steve", "Erin"];
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
        giftees = fullGiftees
    }

    const gifteeInnerHtml = (num) => {
      return String(giftees[num])
    }

    const diceStop = (event) => {
      const btn = document.getElementById('roll');
      const die = document.getElementById('dice');
      const btnLabel = document.getElementById('roll-label');

      if( !btn.checked ) {
        die.classList.add("select")
        btnLabel.classList.add("select")
        btn.disabled = true;
        onGifteeSelect(user_id, spouse_id, group_id)
        }
      }



  return (
    <div id="wrapper">
      <input className="dice-input" id="roll" name="roll" type="checkbox" onClick={diceStop}/>
      <label className="dice-label" id="roll-label" htmlFor="roll"><span></span></label>
      {giftee_name ? <SelectedDieComponent giftee_name={giftee_name}/> : <span></span>}
      <DieComponent group_id={group_id}/>

    </div>
  );
}

export default DiceComponent;

