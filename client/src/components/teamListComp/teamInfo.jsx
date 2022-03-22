import React from 'react';

function TeamInfo(props) {
  return (
    <div className="entry">
      <div className="full_name">{props.teamInfo.full_name}</div>
      <div className="city">{props.teamInfo.city}</div>
      <div className="abb">{props.teamInfo.abbreviation}</div>
      <div className="conf">{props.teamInfo.conference}</div>
      <div className="division">{props.teamInfo.division}</div>
    </div>
  )
}

export default TeamInfo;