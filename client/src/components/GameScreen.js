//Container component for all the pieces
import React, { Component } from 'react';
import ViewWindow from './ViewWindow';
import TextBox from './TextBox';

class GameScreen extends Component {

  constructor(){
    super();

  }

render(){
  return(
    <div id="GameScreen">
      <ViewWindow/>
      <TextBox/>
    </div>
  )
}
}

export default GameScreen;
