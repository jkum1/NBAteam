import React, {useState, useEffect} from 'react';
import TeamInfo from './teamInfo.jsx';

function TeamList(props) {
  const [updown, setUpDown] = useState('');
  const [teamSort, setTeamSort] = useState([]);
  const [pageNumArr, setPageNumArr] = useState([props.pageNum+1, props.pageNum+2, props.pageNum+3]);

  useEffect(() => {
    if (props.sorted) {
      setUpDown("^")
      setTeamSort(props.pageTeam);
    } else {
      setUpDown("v");
      const reverse = [];
      for (var i = props.pageTeam?.length - 1; i >= 0; --i) {
        reverse.push(props.pageTeam[i]);
      }
      setTeamSort(reverse);
    }
  }, [props.pageTeam?.length, props.sorted, props.pageNum]);

  function handleSide(event, left) {
    if (left && pageNumArr[0] > 1) {
      const shiftLeft = [];
      for (var i = 0; i < pageNumArr.length; ++i) {
        shiftLeft.push(pageNumArr[i] - 1);
      }
      setPageNumArr(shiftLeft);
    } else if (pageNumArr[2] < props.pageTeamsQ) {
      const shiftRight = [];
      for (var i = 0; i < pageNumArr.length; ++i) {
        shiftRight.push(pageNumArr[i] + 1);
      }
      setPageNumArr(shiftRight);
    }
  }

  var list = <div></div>;
  if (props.pageTeam) {
    list =
    <div className="teamList">
      <div className="sections">
        <div>Team Name</div>
        <div>City <button className="scroll" onClick={(e) => props.handleSort(e)}>{updown}</button></div>
        <div>Abbreviation</div>
        <div>Conference</div>
        <div>Division</div>
      </div>
      <div className='list'>{teamSort?.map((teamInfo, i) =>
        <TeamInfo key={i} teamInfo={teamInfo} handleTeam={props.handleTeam}/>
      )}
      </div>
      <div className="pageNum">
        <button className="scroll" onClick={(e) => handleSide(e, true)}>{"<"}</button>
        {pageNumArr.map((num, i) =>
          <div className="numScroll" key={i} onClick={(e) => props.handleNum(e, num - 1)}>{num}</div>
        )}
        <button className="scroll" onClick={(e) => handleSide(e, false)}>{">"}</button>
      </div>
    </div>;
  }

  return (
    list
  );
}

export default TeamList;