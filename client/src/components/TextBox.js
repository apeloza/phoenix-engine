//Textbox that takes in and displays lines
import React, { Component } from 'react';

class TextBox extends Component {

  constructor(){
    super();

    this.addToCurrentText = this.addToCurrentText.bind(this);

    this.state = {
      currentText: '',
      currentCharacter: 0,
    };


  }

  componentDidMount(){
    const currentText = this.props.script[this.props.scriptLine].text;
    var textLoop = setTimeout(() => this.addToCurrentText(currentText[this.state.currentCharacter]), 150);
  }

//auto-firing function that makes the text appear to 'type'
  addToCurrentText(newCharacter){
    const currentText = this.props.script[this.props.scriptLine].text;
    console.log(this.state.currentCharacter);
    this.setState({currentText: this.state.currentText + newCharacter});
    this.setState({currentCharacter: this.state.currentCharacter + 1});
    if(this.props.script[this.props.scriptLine].text.length > this.state.currentCharacter){
      var textLoop = setTimeout(() => this.addToCurrentText(currentText[this.state.currentCharacter]), 150);
    }
  }

render(){
  return(
    <div id="TextBox">{this.state.currentText}</div>
  )
}
}

export default TextBox;
