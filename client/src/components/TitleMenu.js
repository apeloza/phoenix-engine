import React, { Component } from 'react';
import CaseMenu from './CaseMenu';

class TitleMenu extends Component {

  constructor(){
    super();

    this.toggleCaseMenu = this.toggleCaseMenu.bind(this);
    this.state = {
      inCaseMenu : false
    };
  }

  toggleCaseMenu(e){
    e.stopPropagation();
    this.setState({inCaseMenu: !this.state.inCaseMenu});
  }

render(){
  //TODO: Render cases dynamically here based on what's available (to the user?)
  //TODO: New Game vs. Load options
  if(this.state.inCaseMenu === false){
    return(
      <div id="TitleMenu">
        <div className="choice-menu">
          <button onClick={this.toggleCaseMenu} className="choice-button">New Game</button>
          <button className="choice-button">Load Game</button>
        </div>
      </div>
    )
  } else {
    return(
      <div id="TitleMenu">
      <button onClick={this.toggleCaseMenu} className="choice-button">Go Back</button>
        <CaseMenu
        loadScript={this.props.loadScript}/>
      </div>
    )

  }

}
}

export default TitleMenu;
