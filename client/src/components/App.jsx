import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SearchBar from './searchBar.jsx';
import TeamList from './teamListComp/teamList.jsx';
import SidePanel from './sidePanel.jsx';

const App = () => {
  const [choseTeam, setChoseTeam] = useState(0);
  const [pageTeam, setPageTeam] = useState([]);
  const [allTeams, setAllTeams] = useState([]);
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      axios.get("http://localhost:3000/teams")
        .then((data, err) => {
          if (err) {
            throw err;
          } else {
            var pagesTeams = [];
            var count = 0;
            var temp = [];
            for (var i = 0; i < data.data.data.length; ++i) {
              var store = data.data.data[i];
              temp.push(store);
              if (i === data.data.data.length - 1) {
                pagesTeams.push(temp);
              } else if (count < 6) {
                count++;
              } else {
                pagesTeams.push(temp);
                temp = [];
                count = 0;
              }
            }
            setPageTeam(pagesTeams);
          }
        })
        .catch((err) => {
          console.log("ClientSide req to Server for all NBA teams went wrong");
        });
    }
    return function cleanup() {
      mounted = false;
    };
  }, []);

  function handleTeamChange(id) {
    setChoseTeam(id);
  }

  return (
    <div className="container">
        <div className="title">NBA TEAMS</div>
        <SearchBar/>
        <TeamList pageTeam={pageTeam[pageNum]} pageNum={pageNum} handleTeam={handleTeamChange}/>
        <SidePanel choseTeam={choseTeam}/>
    </div>
  );
}

export default App;