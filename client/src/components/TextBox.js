//Textbox that takes in and displays lines
import React, { Component } from 'react';

class TextBox extends Component {

  constructor(){
    super();

    this.addToCurrentText = this.addToCurrentText.bind(this);
    this.checkText = this.checkText.bind(this);

    this.state = {
      currentText: '',
      currentCharacter: 0,
    };


  }

  componentDidMount(){
    const currentText = this.props.script[this.props.scriptLine].text;
    var textLoop = setInterval(() => this.addToCurrentText(currentText[this.state.currentCharacter]), 150);
  }

//auto-firing function that makes the text appear to 'type'
  addToCurrentText(newCharacter){
    console.log(this.state.currentCharacter);
    this.setState({currentText: this.state.currentText + newCharacter});
    this.setState({currentCharacter: this.state.currentCharacter + 1});
    // this.checkText();
  }

//clears interval as necessary
  checkText(){
    if(this.props.script[this.props.scriptLone].text.length <= this.state.currentCharacter) clearInterval(textLoop);
  }

render(){
  return(
    <div id="TextBox">{this.state.currentText}</div>
  )
}
}

export default TextBox;
