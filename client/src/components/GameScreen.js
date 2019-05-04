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

    this.nextLine = this.nextLine.bind(this);
  }

//moves the index by 1 to play the next line in the script
  nextLine(){
    console.log('next line firing');
    this.setState({scriptLine: this.state.scriptLine + 1});
  }

render(){
  return(
    <div id="GameScreen">
      <ViewWindow script={this.props.script} scriptLine={this.state.scriptLine}/>
      <TextBox
        script={this.props.script}
        scriptLine={this.state.scriptLine}
        nextLine={this.nextLine}
        />
    </div>
  )
}
}

export default GameScreen;
