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
  const [sort, setSort] = useState(true);

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

  function handleTeamChange(team_id) {
    axios.get("http://localhost:3000/game", {params: {id: team_id}})
      .then((data, err) => {
        if (err) {
          throw err;
        } else {
          var teamFull = data.data.data[0].home_team.full_name;
          var team = data.data.data[0].home_team.name;
          if (team_id !== data.data.data[0].home_team.id) {
            team = data.data.data[0].visitor_team.name;
            teamFull = data.data.data[0].visitor_team.full_name;
          }
          var temp = {
            teamName: team,
            teamFullName: teamFull,
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
      .then(() => {
        setChoseTeam(team_id);
      })
      .catch((err) => {
        console.log("ClientSide req to Server for one team game stats went wrong");
      });
  }

  function handleExit() {
    setChoseTeam(0);
  }

  function handleCity() {
    setSort(!sort);
  }

  function handleNum(event, num) {
    setPageNum(num);
  }

  return (
    <div className="container">
        <div className="title">NBA TEAMS</div>
        <SearchBar/>
        <TeamList pageTeam={pageTeam[pageNum]} sorted={sort} handleSort={handleCity} pageNum={pageNum} handleTeam={handleTeamChange} pageTeamsQ={pageTeam?.length - 1} handleNum={handleNum}/>
        <SidePanel gameInfo={gameInfo} choseTeam={choseTeam} handleTeam={handleExit}/>
    </div>
  );
}

export default App;