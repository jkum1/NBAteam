import React, {useContext} from 'react';
import {NbaContext} from '../nbaContext.jsx';
import TeamInfo from './teamInfo.jsx';

function TeamList(props) {
  const context = useContext(NbaContext);
  var list;

  if (context.allTeams !== undefined) {
    list =
    <div>
      {context.allTeams.map((teamInfo, i) =>
        <TeamInfo key={i} teamInfo={teamInfo}/>
      )}
    </div>
  } else {
    list = [];
  }

  return (
    list
  );
}

export default TeamList;