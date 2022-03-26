import React, {useContext} from 'react';
import TeamInfo from './teamInfo.jsx';

function TeamList(props) {

  var list = <div></div>;
  if (props.pageTeam) {
    list =
    <div className="teamList">
      <div className='list'>{props.pageTeam.map((teamInfo, i) =>
        <TeamInfo key={i} teamInfo={teamInfo} handleTeam={props.handleTeam}/>
      )}
      </div>
      <div className="pageNum">{props.pageNum + 1}</div>
    </div>;
  }

  return (
    list
  );
}

export default TeamList;