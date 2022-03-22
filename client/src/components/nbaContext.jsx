import React, {createContext, useState, useEffect, useMemo} from 'react';
import axios from 'axios';

const NbaContext = createContext();

const NbaContextProvider = ({children}) => {
  const [choseTeam, setChoseTeam] = useState(false);
  const [pageTeam, setPageTeam] = useState([]);
  const [allTeams, setAllTeams] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [contextValue, setContextValue] = useState({});

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
  }, [choseTeam]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setContextValue({
        choseTeam: choseTeam,
        pageTeam: pageTeam,
        allTeams: allTeams,
        pageNum: pageNum,
      })
    }
    return function cleanup() {
      mounted = false;
    }
  }, [choseTeam, pageNum, pageTeam, allTeams]);

  return (
    <NbaContext.Provider value={contextValue}>
      {children}
    </NbaContext.Provider>
  );
};

export {NbaContext, NbaContextProvider};