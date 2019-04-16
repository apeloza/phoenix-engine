import React, { Component } from 'react';
import DATA from '../data';

class CaseMenu extends Component {

  constructor(){
    super();
  }

render(){
  //TODO: Render cases dynamically here based on what's available (to the user?)
  return(
      <div className="choice-menu">
        <button onClick={() => this.props.loadScript(DATA)} className="choice-button">Test Case 1</button>
        <button className="choice-button">Test Case 2</button>
      </div>
  )
}
}

export default CaseMenu;
