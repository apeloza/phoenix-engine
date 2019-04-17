//Textbox that takes in and displays lines
import React, { Component } from 'react';

class TextBox extends Component {

  constructor(){
    super();
  }

  componentDidMount(){
    
  }

render(){
  return(
    <div id="TextBox">{this.props.script[this.props.scriptLine].text}</div>
  )
}
}

export default TextBox;
