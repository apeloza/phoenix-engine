//Shows graphics. Might be redundant but I am nesting it this way for now.
import React, { Component } from 'react';

class ViewWindow extends Component {

  constructor(){
    super();

    this.state = {
      background: null
    }

    this.componentDidMount = this.componentDidMount.bind(this);

  }

  componentDidMount(){

    //if a new background has been referenced, apply it
    if(this.props.script[this.props.scriptLine].background !== null &&
      this.props.script[this.props.scriptLine].background !== undefined &&
       this.props.script[this.props.scriptLine].background !== this.state.background)
     this.setState({background: this.props.script[this.props.scriptLine].background})
  }

  render(){

    //set up styling here
    const windowStyles = {
      backgroundImage : "url('/public/img/backgrounds/" + this.state.background + ".png')"
    };

    return(
      <div id="ViewWindow" style={windowStyles}></div>
    )
  }
}

export default ViewWindow;
