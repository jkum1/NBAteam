import React from 'react';

function TeamInfo(props) {
  return (
    <div>
      {props.teamInfo.full_name}
      {props.teamInfo.city}
      {props.teamInfo.abbreviation}
      {props.teamInfo.conference}
      {props.teamInfo.division}
    </div>
  )
}

export default TeamInfo;