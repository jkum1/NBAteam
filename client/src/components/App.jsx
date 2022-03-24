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
  const [gameInfo, setGameInfo] = useState([]);

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

  useEffect(() => {
    let mounted = true;
    axios.get("http://localhost:3000/game", {params: {id: choseTeam}})
      .then((data, err) => {
        if (err) {
          throw err;
        } else {
          var temp = {
            teamName: data.data.data[0].home_team.full_name,
            totalGames: data.data.data.length,
            date: data.data.data[0].date,
            homeTeam: data.data.data[0].home_team.name,
            homeTeamScore: data.data.data[0].home_team_score,
            visitorTeam: data.data.data[0].visitor_team.name,
            visitorTeamScore: data.data.data[0].visitor_team_score
          };
          setGameInfo(temp);
        }
      })
      .catch((err) => {
        console.log("ClientSide req to Server for one team game stats went wrong");
      })
    return function cleanup() {
      mounted = false;
    };
  }, [choseTeam]);

  function handleTeamChange(id) {
    setChoseTeam(id);
  }

  return (
    <div className="container">
        <div className="title">NBA TEAMS</div>
        <SearchBar/>
        <TeamList pageTeam={pageTeam[pageNum]} pageNum={pageNum} handleTeam={handleTeamChange}/>
        <SidePanel gameInfo={gameInfo} choseTeam={choseTeam}/>
    </div>
  );
}

export default App;