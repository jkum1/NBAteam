import React from 'react';

function SidePanel(props) {
  var page = <div></div>;
  if (props.choseTeam > 0) {
    page =
      <div>
        <div>Working</div>
      </div>;
  }

  return (
    page
  );
}

export default SidePanel;