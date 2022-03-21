import React, {useContext} from 'react';
import axios from 'axios';
import SearchBar from './searchBar.jsx';
import TeamList from './teamListComp/teamList.jsx';
import SidePanel from './sidePanel.jsx';
import {NbaContext, NbaContextProvider} from './nbaContext.jsx';

const App = () => {
  return (
    <NbaContextProvider>
      <Page />
    </NbaContextProvider>
  );
};

const Page = () => {
  const user = useContext(NbaContext);
  if (user.choseTeam) {
    return (
      <div className="container">
        <div className="title">NBA TEAMS</div>
        <SearchBar/>
        <TeamList/>
        <SidePanel/>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="title">NBA TEAMS</div>
        <SearchBar/>
        <TeamList/>
      </div>
    );
  }
};

export default App;