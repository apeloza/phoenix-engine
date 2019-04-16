//Container component for all the pieces
import React, { Component } from 'react';
import ViewWindow from './ViewWindow';
import TextBox from './TextBox';

class GameScreen extends Component {

  constructor(){
    super();
    this.state = {
      scriptLine: 0
    };
  }

render(){
  return(
    <div id="GameScreen">
      <ViewWindow script={this.props.script} scriptLine={this.props.scriptLine}/>
      <TextBox script={this.props.script} scriptLine={this.state.scriptLine}/>
    </div>
  )
}
}

export default GameScreen;
