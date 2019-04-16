//Container component for all the pieces
import React, { Component } from 'react';
import GameScreen from './GameScreen';
import TitleMenu from './TitleMenu';

class GameContainer extends Component {

  constructor(){
    super();
    this.state = {
      script: null
    }
    this.loadScript = this.loadScript.bind(this);

  }
  loadScript(data){
    console.log(data);
    this.setState({script: data});
  }

render(){
  if(this.state.script === null){
    return(
      <div id="GameContainer">
        <TitleMenu
        loadScript={this.loadScript}
        />
      </div>
    )
  } else {
    return(
        <div id="GameContainer">
          <GameScreen script={this.state.script}/>
        </div>
      )
  }

}
}

export default GameContainer;
