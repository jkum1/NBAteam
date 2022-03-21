import React, {createContext, useState, useEffect, useMemo} from 'react';

const NbaContext = createContext();

const NbaContextProvider = ({children}) => {
  const [choseTeam, setChoseTeam] = useState(false);
  const [test, setTest] = useState(true);

  const contextValue = useMemo(() => {
    return {
      choseTeam: choseTeam,
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