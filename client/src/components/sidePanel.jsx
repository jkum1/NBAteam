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
        <div className='titleSide'>{props.gameInfo.teamName}<button className="sidePanelExit" onClick={(e) => {props.handleTeam(e); handleExit(e)}}>X</button></div>
        <div className='teamFullName'>Team Full Name {props.gameInfo.teamFullName}</div>
        <div className='totalGames'><div>Total Games in 2021 </div><div>{props.gameInfo.totalGames}</div></div>
        <div>Random Game Details</div>
        <div className='date'><div>Date</div><div>{split[0]}</div></div>
        <div className='homeTeam'><div>Home Team</div><div>{props.gameInfo.homeTeam}</div></div>
        <div className='homeTeamScore'><div>Home Team Score</div>{props.gameInfo.homeTeamScore}</div>
        <div className='visitorTeam'><div>Visitor Team</div><div>{props.gameInfo.visitorTeam}</div></div>
        <div className='visitorTeamScore'><div>Visitor Team Score</div><div>{props.gameInfo.visitorTeamScore}</div></div>
      </div>;
  }

  return (
    page
  );
}

export default SidePanel;