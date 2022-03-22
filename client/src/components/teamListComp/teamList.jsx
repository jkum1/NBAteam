import React, {useContext} from 'react';
import {NbaContext} from '../nbaContext.jsx';
import TeamInfo from './teamInfo.jsx';

function TeamList(props) {
  const context = useContext(NbaContext);
  var list = <div></div>;

  if (context.pageTeam) {
    if (context.pageTeam[context.pageNum]) {
      list =
      <div>
        <div>{context.pageTeam[context.pageNum].map((teamInfo, i) =>
          <TeamInfo key={i} teamInfo={teamInfo}/>
        )}
        </div>
        <div>{context.pageNum + 1}</div>
      </div>;
    }
  }

  return (
    list
  );
}

export default TeamList;