import React from 'react';
import SearchBar from './searchBar.jsx';
import TeamList from './teamListComp/teamList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="container">
        <div className="title">NBA TEAMS</div>
        <SearchBar/>
        <TeamList/>
      </div>
    )
  }
}

export default App;