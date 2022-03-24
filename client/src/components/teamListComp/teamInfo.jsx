import React, {useState} from 'react';

function TeamInfo(props) {
  const [chosen, setChosen] = useState(false);

  function handleChange(event) {
    props.handleTeam(event.target.value);
  }

  function handleClick(event) {
    if (chosen) {
      setChosen(false);
    } else {
      setChosen(true);
    }
    console.log('logged');
  }

  var oneRow;
  if (chosen) {
    oneRow =
      <div className="entryChosen" value={props.teamInfo.id} onClick={(e) => {props.handleTeam(props.teamInfo.id, e); handleClick}}>
        <div className="full_name">{props.teamInfo.full_name}</div>
        <div className="city">{props.teamInfo.city}</div>
        <div className="abb">{props.teamInfo.abbreviation}</div>
        <div className="conf">{props.teamInfo.conference}</div>
        <div className="division">{props.teamInfo.division}</div>
      </div>;
  } else {
    oneRow =
    <div className="entry" value={props.teamInfo.id} onClick={(e) => {props.handleTeam(props.teamInfo.id, e); handleClick}}>
      <div className="full_name">{props.teamInfo.full_name}</div>
      <div className="city">{props.teamInfo.city}</div>
      <div className="abb">{props.teamInfo.abbreviation}</div>
      <div className="conf">{props.teamInfo.conference}</div>
      <div className="division">{props.teamInfo.division}</div>
    </div>;
  }

  return (
    oneRow
  );
}

export default TeamInfo;