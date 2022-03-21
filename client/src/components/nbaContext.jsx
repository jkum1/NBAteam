import React, {createContext, useState, useEffect, useMemo} from 'react';
import axios from 'axios';

const NbaContext = createContext();

const NbaContextProvider = ({children}) => {
  const [choseTeam, setChoseTeam] = useState(false);
  const [test, setTest] = useState(true);
  const [allTeams, setAllTeams] = useState([]);

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

  const contextValue = useMemo(() => {
    return {
      choseTeam: choseTeam,
      allTeams: allTeams,
      test: test
    }
  }, [choseTeam, test])

  return (
    <NbaContext.Provider value={contextValue}>
      {children}
    </NbaContext.Provider>
  );
};

export {NbaContext, NbaContextProvider};