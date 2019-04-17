//Container component for all the pieces
import React, { Component } from 'react';
import GameScreen from './GameScreen';
import TitleMenu from './TitleMenu';
import Footer from './Footer';

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
        loadScript={this.loadScript}/>
        <Footer/>
      </div>
    )
  } else {
    return(
        <div id="GameContainer">
          <GameScreen script={this.state.script}/>
          <Footer/>
        </div>
      )
  }

}
}

export default GameContainer;
