//Shows graphics. Might be redundant but I am nesting it this way for now.
import React, { Component } from 'react';

import lobby from '../img/backgrounds/lobby.png';
import defense from '../img/backgrounds/defense.png';

console.log(lobby);

class ViewWindow extends Component {

  constructor(){
    super();

    this.state = {
      backgrounds: {
        'lobby' : lobby,
        'defense' : defense
      },
      activeBackground: null
    }
    console.log(this.state);

    this.componentDidMount = this.componentDidMount.bind(this);

  }

  componentDidMount(){
    const newBackground = this.props.script[this.props.scriptLine].background;
    //if a new background has been referenced, apply it
    if(newBackground !== null &&
      newBackground !== undefined &&
       newBackground !== this.state.background)
     this.setState({activeBackground: this.state.backgrounds[newBackground]})
  }

  render(){
    const $this = this;

    //set up styling here
    const windowStyles = {
      backgroundImage : 'url("'+ this.state.activeBackground +'")',
      backgroundSize: 'cover'
    };

    return(
      <div id="ViewWindow" style={windowStyles}></div>
    )
  }
}

export default ViewWindow;
