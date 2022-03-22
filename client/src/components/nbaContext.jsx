import React, {createContext, useState, useEffect, useMemo} from 'react';
import axios from 'axios';

const NbaContext = createContext();

const NbaContextProvider = ({children}) => {
  const [choseTeam, setChoseTeam] = useState(false);
  const [test, setTest] = useState(true);
  const [allTeams, setAllTeams] = useState([]);
  const [contextValue, setContextValue] = useState({});

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      axios.get("http://localhost:3000/teams")
        .then((data, err) => {
          if (err) {
            throw err;
          }
          setAllTeams(data.data.data);
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
        test: test,
        allTeams: allTeams
      })
    }
    return function cleanup() {
      mounted = false;
    }
  }, [choseTeam, test, allTeams]);

  return (
    <NbaContext.Provider value={contextValue}>
      {children}
    </NbaContext.Provider>
  );
};

export {NbaContext, NbaContextProvider};