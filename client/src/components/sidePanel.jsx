import React from 'react';

function SidePanel(props) {

  var page = <div></div>;

  function handleExit(event) {
    event.preventDefault();
    page = <div></div>;
  }

  if (props.choseTeam > 0) {
    const split = props.gameInfo.date.split('T');
    page =
      <div className='sidePanel'>
        <div id='titleSide'>{props.gameInfo.teamName}<button id="sidePanelExit" onClick={(e) => {props.handleTeam(e); handleExit(e)}}>x</button></div>
        <div className="infoSide" id='teamFullName'><div>Team Full Name</div><div>{props.gameInfo.teamFullName}</div></div>
        <div className="infoSide" id='totalGames'><div>Total Games in 2021</div><div>{props.gameInfo.totalGames}</div></div>
        <div className="infoSide" id="gameDetails">Random Game Details</div>
        <div className="infoSide" id='date'><div>Date</div><div>{split[0]}</div></div>
        <div className="infoSide" id='homeTeam'><div>Home Team</div><div>{props.gameInfo.homeTeam}</div></div>
        <div className="infoSide" id='homeTeamScore'><div>Home Team Score</div>{props.gameInfo.homeTeamScore}</div>
        <div className="infoSide" id='visitorTeam'><div>Visitor Team</div><div>{props.gameInfo.visitorTeam}</div></div>
        <div className="infoSide" id='visitorTeamScore'><div>Visitor Team Score</div><div>{props.gameInfo.visitorTeamScore}</div></div>
      </div>;
  }

  return (
    page
  );
}

export default SidePanel;